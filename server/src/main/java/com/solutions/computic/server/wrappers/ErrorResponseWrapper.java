package com.solutions.computic.server.wrappers;

import com.solutions.computic.server.dtos.response.ResponseDto;
import com.solutions.computic.server.enums.ResponseStatusType;

import lombok.Getter;

@Getter
public class ErrorResponseWrapper extends ResponseWrapper {

    private final int errorCode;

    public ErrorResponseWrapper(ResponseStatusType status, String message, ResponseDto data,
            String displayMessage, int errorCode) {
        super(status, message, data, displayMessage);
        this.errorCode = errorCode;
    }
}
