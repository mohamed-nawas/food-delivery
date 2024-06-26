package com.solutions.computic.server.enums;

import lombok.Getter;

@Getter
public enum SuccessResponseStatusType {

    SIGN_UP(201, "Successfully signup the user"),
    SIGN_IN(200, "Successfully logged in the user"),
    GET_USER(200, "Successfully retrieved the user");

    private final int code;
    private final String message;

    SuccessResponseStatusType(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
