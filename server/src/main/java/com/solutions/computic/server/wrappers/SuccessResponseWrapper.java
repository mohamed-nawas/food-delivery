package com.solutions.computic.server.wrappers;

import com.solutions.computic.server.dtos.response.ResponseDto;
import com.solutions.computic.server.enums.ResponseStatusType;

import lombok.Getter;

@Getter
public class SuccessResponseWrapper extends ResponseWrapper {

    private final int statusCode;

    public SuccessResponseWrapper(ResponseStatusType status, String message, ResponseDto data, String displayMessage,
            int statusCode) {
        super(status, message, data, displayMessage);
        this.statusCode = statusCode;
    }
}
