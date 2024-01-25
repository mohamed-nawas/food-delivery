package com.solutions.computic.server.exceptions;

public class FilterException extends RuntimeException {

    public FilterException(String message) {
        super(message);
    }

    public FilterException(String message, Throwable error) {
        super(message, error);
    }
}
