package com.solutions.computic.server.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.solutions.computic.server.dtos.response.ResponseDto;
import com.solutions.computic.server.enums.ErrorResponseStatusType;
import com.solutions.computic.server.enums.ResponseStatusType;
import com.solutions.computic.server.enums.SuccessResponseStatusType;
import com.solutions.computic.server.wrappers.ErrorResponseWrapper;
import com.solutions.computic.server.wrappers.ResponseWrapper;
import com.solutions.computic.server.wrappers.SuccessResponseWrapper;

public class Controller {

    private static final String ERROR_MESSAGE = "Oops!! Something went wrong. Please try again.";
    private static final String SUCCESS_MESSAGE = "Successfully returned the data.";

    /**
     * This method creates data response for success scenarios
     *
     * @param status success status
     * @param data   response data
     * @return success response
     */
    protected ResponseEntity<ResponseWrapper> getSuccessResponse(SuccessResponseStatusType status, ResponseDto data) {
        ResponseWrapper responseWrapper = new SuccessResponseWrapper(ResponseStatusType.SUCCESS, status.getMessage(),
                data, SUCCESS_MESSAGE, status.getCode());
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }

    /**
     * This method creates an empty data response for bad request scenarios
     *
     * @param status error status
     * @return bad request error response
     */
    protected ResponseEntity<ResponseWrapper> getBadRequestResponse(ErrorResponseStatusType status) {
        ResponseWrapper responseWrapper = new ErrorResponseWrapper(ResponseStatusType.ERROR, status.getMessage(),
                null, ERROR_MESSAGE, status.getCode());
        return new ResponseEntity<>(responseWrapper, HttpStatus.BAD_REQUEST);
    }

    /**
     * This method creates an empty data response for the internal server error
     * scenarios
     *
     * @return internal server error response
     */
    protected ResponseEntity<ResponseWrapper> getInternalServerErrorResponse() {
        ResponseWrapper responseWrapper = new ErrorResponseWrapper(ResponseStatusType.ERROR,
                ErrorResponseStatusType.INTERNAL_SERVER_ERROR.getMessage(), null, ERROR_MESSAGE,
                ErrorResponseStatusType.INTERNAL_SERVER_ERROR.getCode());
        return new ResponseEntity<>(responseWrapper, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
