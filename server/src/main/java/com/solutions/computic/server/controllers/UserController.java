package com.solutions.computic.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solutions.computic.server.dtos.response.UserResponseDto;
import com.solutions.computic.server.enums.ErrorResponseStatusType;
import com.solutions.computic.server.enums.SuccessResponseStatusType;
import com.solutions.computic.server.exceptions.FoodDeliveryException;
import com.solutions.computic.server.exceptions.UserNotFoundException;
import com.solutions.computic.server.services.AuthService;
import com.solutions.computic.server.wrappers.ResponseWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1/user")
public class UserController extends Controller {

    private final AuthService service;

    @Autowired
    public UserController(AuthService authService) {
        this.service = authService;
    }

    @GetMapping(path = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseWrapper> getUser() {
        try {
            var email = "";
            var principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (principal instanceof UserDetails) {
                email = ((UserDetails)principal).getUsername();
            }

            var user = service.findByEmail(email);
            var responseDto = new UserResponseDto(user);

            log.debug("Successfully retreived the user by email: {}", responseDto.toLogJson());
            return getSuccessResponse(SuccessResponseStatusType.GET_USER, responseDto);
        } catch (UserNotFoundException e) {
            log.error("User not found for given email: {}", "abc", e);
            return getBadRequestResponse(ErrorResponseStatusType.USER_NOT_FOUND);
        } catch (FoodDeliveryException e) {
            log.error("Error occurred during retrieving the user for email: {}", "abc", e);
            return getInternalServerErrorResponse();
        }
    }
}
