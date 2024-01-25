package com.solutions.computic.server.enums;

import lombok.Getter;

@Getter
public enum ResponseStatusType {

    SUCCESS("Success"),
    ERROR("Error");

    private final String status;

    ResponseStatusType(String status) {
        this.status = status;
    }
}
