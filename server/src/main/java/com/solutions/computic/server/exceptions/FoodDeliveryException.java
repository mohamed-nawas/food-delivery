package com.solutions.computic.server.exceptions;

public class FoodDeliveryException extends RuntimeException {

    public FoodDeliveryException(String message) {
        super(message);
    }

    public FoodDeliveryException(String message, Throwable error) {
        super(message, error);
    }
}
