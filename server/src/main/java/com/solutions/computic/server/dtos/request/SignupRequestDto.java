package com.solutions.computic.server.dtos.request;

import lombok.Getter;

@Getter
public class SignupRequestDto implements RequestDto {

    private String name;
    private String email;
    private String pwd;

    @Override
    public String toLogJson() {
        return toJson();
    }

    @Override
    public boolean isRequiredAvailable() {
        return name != null && !name.isEmpty() && email != null && !email.isEmpty() &&
                pwd != null && !pwd.isEmpty();
    }

}
