package com.solutions.computic.server.security.oauth2.google;

import java.util.Map;

import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;

import com.solutions.computic.server.security.oauth2.CustomOAuth2User;

public class GoogleOAuth2User implements CustomOAuth2User {

    private final DefaultOidcUser oidcUser;

    public GoogleOAuth2User(DefaultOidcUser oidcUser) {
        this.oidcUser = oidcUser;
    }

    @Override
    public String getId() {
        return this.oidcUser.getSubject();
    }

    @Override
    public String getEmail() {
        return this.oidcUser.getEmail();
    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.oidcUser.getAttributes();
    }
    
}
