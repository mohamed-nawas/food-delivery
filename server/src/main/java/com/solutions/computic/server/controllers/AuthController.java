package com.solutions.computic.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.solutions.computic.server.dtos.response.TokenResponseDto;
import com.solutions.computic.server.entities.SpringSecurityAuthDetails;
import com.solutions.computic.server.enums.ErrorResponseStatusType;
import com.solutions.computic.server.enums.SuccessResponseStatusType;
import com.solutions.computic.server.exceptions.FoodDeliveryException;
import com.solutions.computic.server.exceptions.UserAlreadyExistsException;
import com.solutions.computic.server.exceptions.UserNotFoundException;
import com.solutions.computic.server.services.AuthService;
import com.solutions.computic.server.services.JwtService;
import com.solutions.computic.server.wrappers.ResponseWrapper;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1/auth")
public class AuthController extends Controller {

    private final AuthService service;
    private final JwtService jwtService;

    @Autowired
    public AuthController(AuthService authService, JwtService jwtService) {
        this.service = authService;
        this.jwtService = jwtService;
    }

    @PostMapping(path = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseWrapper> signUp(@RequestParam(name = "name") String name, @RequestParam(name = "email") String email,
    @RequestParam(name = "pwd") String pwd) {
        try {
            if (name == null || name.trim().isEmpty() || email == null || email.trim().isEmpty() || pwd == null || pwd.trim().isEmpty()) {
                return getBadRequestResponse(ErrorResponseStatusType.MISSING_REQUIRED_FIELDS);
            }

            var user = service.createUser(name, email, pwd);
            var authUser = new SpringSecurityAuthDetails(user);
            var token = jwtService.generateToken(authUser);
            var responseDto = new TokenResponseDto(user, token);

            log.debug("Successfully create the user: {}", responseDto.toLogJson());
            return getSuccessResponse(SuccessResponseStatusType.SIGN_UP, responseDto);
        } catch (UserAlreadyExistsException e) {
            log.error("User Already exists for email: {}", email, e);
            return getBadRequestResponse(ErrorResponseStatusType.USER_ALREADY_EXISTS);
        } catch (FoodDeliveryException e) {
            log.error("Error occurred during signup the user for email: {}", email, e);
            return getInternalServerErrorResponse();
        }
    }

    @PostMapping(path = "/signin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseWrapper> login(@RequestParam(name = "email") String email,
            @RequestParam(name = "pwd") String pwd,
            HttpServletResponse response) {
        try {
            if (email == null || email.isEmpty() || pwd == null || pwd.isEmpty())
                return getBadRequestResponse(ErrorResponseStatusType.MISSING_REQUIRED_FIELDS);

            var user = service.login(email, pwd);
            var responseDto = new TokenResponseDto(user, response.getHeader("TOKEN"));

            log.debug("Successfully logged in the user: {}", responseDto.toLogJson());
            return getSuccessResponse(SuccessResponseStatusType.SIGN_IN, responseDto);
        } catch (UserNotFoundException e) {
            log.error("User not found for email and password combination: {}, {}", email,
                    pwd, e);
            return getBadRequestResponse(ErrorResponseStatusType.USER_NOT_FOUND);
        } catch (FoodDeliveryException e) {
            log.error("Error occurred during login in the user for email and password: {}, {}", email,
                    pwd, e);
            return getInternalServerErrorResponse();
        }
    }
}
