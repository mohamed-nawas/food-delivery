package com.solutions.computic.server.configs;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsConfig implements Filter {

    private static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
    private static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
    private static final String ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age";
    private static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
    private static final String ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials";
    private static final String OPTIONS = "OPTIONS";
    private final String allowedOrigins;
    private final String allowedMethods;
    private final String maxAge;
    private final String allowedHeaders;
    private final String allowCredentials;

    public CorsConfig(@Value("${accessControl.allowedOrigin}") String allowedOrigins,
            @Value("${accessControl.allowedMethods}") String allowedMethods,
            @Value("${accessControl.maxAge}") String maxAge,
            @Value("${accessControl.allowedHeaders}") String allowedHeaders,
            @Value("${accessControl.allowCredentials}") String allowCredentials) {
        this.allowedOrigins = allowedOrigins;
        this.allowedMethods = allowedMethods;
        this.maxAge = maxAge;
        this.allowedHeaders = allowedHeaders;
        this.allowCredentials = allowCredentials;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, allowedOrigins);
        response.setHeader(ACCESS_CONTROL_ALLOW_METHODS, allowedMethods);
        response.setHeader(ACCESS_CONTROL_MAX_AGE, maxAge);
        response.setHeader(ACCESS_CONTROL_ALLOW_HEADERS, allowedHeaders);
        response.setHeader(ACCESS_CONTROL_ALLOW_CREDENTIALS, allowCredentials);

        if (OPTIONS.equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            filterChain.doFilter(req, res);
        }
    }
}
