package com.solutions.computic.server.dtos.response;

import com.solutions.computic.server.entities.AuthDetails;

import lombok.Getter;

@Getter
public class UserResponseDto implements ResponseDto {

    private String name;
    private String email;

    public UserResponseDto(AuthDetails user) {
        this.name = user.getName();
        this.email = user.getEmail();
    }

    @Override
    public String toLogJson() {
        return toJson();
    }

}
