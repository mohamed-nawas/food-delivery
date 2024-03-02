package com.solutions.computic.server.security.oauth2.entities;

import com.solutions.computic.server.entities.AuthDetails;
import com.solutions.computic.server.security.oauth2.enums.AuthProvider;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class OAuth2User extends AuthDetails {

    @Column
    private boolean emailVerified = false;
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;
    @Column
    private String providerId;
}