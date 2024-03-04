package com.solutions.computic.server.enums;

import lombok.Getter;

@Getter
public enum ErrorResponseStatusType {

    MISSING_REQUIRED_FIELDS(400, "Missing required fields"),
    USER_ALREADY_EXISTS(400, "User already exists for given email"),
    USER_NOT_FOUND(400, "User not found for given email and password combination"),
    UNAUTHORIZED(401, "Authentication failed, credentials are wrong"),
    ALREADY_SIGNUP_WITH_AN_OAUTH_PROVIDER(409, "Looks like you already have signed up with an OAuth provider, Please login with the OAuth provider credentials"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error");

    private final int code;
    private final String message;

    ErrorResponseStatusType(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
