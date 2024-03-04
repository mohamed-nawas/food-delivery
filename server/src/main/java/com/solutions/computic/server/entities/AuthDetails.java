package com.solutions.computic.server.entities;

import java.util.UUID;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.solutions.computic.server.enums.RoleType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class AuthDetails {

    @Transient
    protected static final String AUTH_ID_PREFIX = "AID";
    @Transient
    private static final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Id
    protected String id;
    @Enumerated(EnumType.STRING)
    private RoleType roleType;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String email;
    @Column(nullable = true)
    private String pwd;

    public AuthDetails(String name, String email, String pwd) {
        this.id = AUTH_ID_PREFIX + UUID.randomUUID();
        this.name = name;
        this.email = email;
        this.pwd = bCryptPasswordEncoder.encode(pwd);
        this.roleType = RoleType.USER;
    }

    public AuthDetails(AuthDetails authDetails) {
        this.id = authDetails.getId();
        this.roleType = authDetails.getRoleType();
        this.name = authDetails.getName();
        this.email = authDetails.getEmail();
        this.pwd = authDetails.getPwd();
    }

    public void setName(String name) { this.name = name; }

    public void setEmail(String email) { this.email = email; }
}
