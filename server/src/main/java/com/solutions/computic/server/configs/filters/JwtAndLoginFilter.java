package com.solutions.computic.server.configs.filters;

import java.io.IOException;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.solutions.computic.server.configs.CustomUserDetailsService;
import com.solutions.computic.server.entities.AuthDetails;
import com.solutions.computic.server.entities.SpringSecurityAuthDetails;
import com.solutions.computic.server.enums.ErrorResponseStatusType;
import com.solutions.computic.server.enums.ResponseStatusType;
import com.solutions.computic.server.exceptions.UserNotFoundException;
import com.solutions.computic.server.repositories.AuthRepository;
import com.solutions.computic.server.security.oauth2.repositories.OAuth2UserRepository;
import com.solutions.computic.server.services.JwtService;
import com.solutions.computic.server.wrappers.ErrorResponseWrapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtAndLoginFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;
    private final AuthRepository repository;
    private final OAuth2UserRepository oAuth2UserRepository;

    @Autowired
    @Lazy
    public JwtAndLoginFilter(JwtService jwtService, CustomUserDetailsService userDetailsService,
            AuthenticationManager authenticationManager, AuthRepository repository, OAuth2UserRepository oAuth2UserRepository) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
        this.repository = repository;
        this.oAuth2UserRepository = oAuth2UserRepository;
    }

    private boolean checkAlreadySignupWithAOAuthProvider(String email, HttpServletResponse response) throws IOException {
        if (oAuth2UserRepository.findByEmail(email).isPresent()) {
            var responseWrapper = new ErrorResponseWrapper(ResponseStatusType.ERROR,
                    ErrorResponseStatusType.ALREADY_SIGNUP_WITH_AN_OAUTH_PROVIDER.getMessage(), null,
                    "Looks like you already have signed up with an OAuth provider, Please login with the OAuth provider credentials", 
                    ErrorResponseStatusType.ALREADY_SIGNUP_WITH_AN_OAUTH_PROVIDER.getCode());
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            var mapper = new ObjectMapper();
            String jsonResponse = mapper.writeValueAsString(responseWrapper);
            response.getWriter().write(jsonResponse);
            return true;
        }
        return false;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;

        if ("/api/v1/auth/signin".equals(request.getServletPath()) || "/api/v1/auth/signup".equals(request.getServletPath())) {
            String email = request.getParameter("email");
            if (checkAlreadySignupWithAOAuthProvider(email, response)) {
                return;
            }
        }

        if ("/api/v1/auth/signin".equals(request.getServletPath())) {
            try {
                String email = request.getParameter("email");
                String pwd = request.getParameter("pwd");
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, pwd));
                AuthDetails user = repository.findByEmail(email)
                        .orElseThrow(() -> new UserNotFoundException("User not found in DB for given email"));
                SpringSecurityAuthDetails authUser = new SpringSecurityAuthDetails(user);
                String token = jwtService.generateToken(authUser);
                response.setHeader("TOKEN", token);
                log.debug("Authentication successful, generated token, and modified the servlet response");
            } catch (AuthenticationException | UserNotFoundException e) {
                var responseWrapper = new ErrorResponseWrapper(ResponseStatusType.ERROR,
                        ErrorResponseStatusType.UNAUTHORIZED.getMessage(), null,
                        "Oops!! Something went wrong, pleas try again", ErrorResponseStatusType.UNAUTHORIZED.getCode());
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                var mapper = new ObjectMapper();
                String jsonResponse = mapper.writeValueAsString(responseWrapper);
                response.getWriter().write(jsonResponse);
                return;
            }
        } else {
            if (StringUtils.isNotEmpty(authHeader) && StringUtils.startsWith(authHeader, "Bearer ")) {
                jwt = authHeader.substring(7);
                log.debug("JWT - {}", jwt.toString());
                userEmail = jwtService.extractUserName(jwt);

                if (StringUtils.isNotEmpty(userEmail)
                        && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

                    if (jwtService.isTokenValid(jwt, userDetails)) {
                        log.debug("User: {}", userDetails);
                        SecurityContext context = SecurityContextHolder.createEmptyContext();
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                                userDetails, null, userDetails.getAuthorities());
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        context.setAuthentication(authToken);
                        SecurityContextHolder.setContext(context);
                    }
                }
            }
        }

        filterChain.doFilter(request, response);
    }
}
