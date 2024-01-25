package com.solutions.computic.server.dtos.response;

import com.solutions.computic.server.entities.AuthDetails;

import lombok.Getter;

@Getter
public class TokenResponseDto implements ResponseDto {

    private String email;
    private String token;

    public TokenResponseDto(AuthDetails user, String token) {
        this.email = user.getEmail();
        this.token = token;
    }

    @Override
    public String toLogJson() {
        return toJson();
    }

}
