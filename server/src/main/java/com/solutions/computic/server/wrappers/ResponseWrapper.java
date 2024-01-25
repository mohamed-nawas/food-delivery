package com.solutions.computic.server.wrappers;

import com.solutions.computic.server.dtos.BaseDto;
import com.solutions.computic.server.dtos.response.ResponseDto;
import com.solutions.computic.server.enums.ResponseStatusType;

import lombok.Getter;

@Getter
public class ResponseWrapper implements BaseDto {

    private final ResponseStatusType status;
    private final String message;
    private final ResponseDto data;
    private final String displayMessage;

    public ResponseWrapper(ResponseStatusType status, String message, ResponseDto data,
            String displayMessage) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.displayMessage = displayMessage;
    }

    @Override
    public String toLogJson() {
        return toJson();
    }
}
