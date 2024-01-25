package com.solutions.computic.server.dtos.request;

import com.solutions.computic.server.dtos.BaseDto;

public interface RequestDto extends BaseDto {

    /**
     * This method verifies if all required fields exists for a request
     *
     * @return true/false
     */
    boolean isRequiredAvailable();
}
