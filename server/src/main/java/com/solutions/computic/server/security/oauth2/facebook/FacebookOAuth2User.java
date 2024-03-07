package com.solutions.computic.server.security.oauth2.facebook;

import java.util.Map;

import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import com.solutions.computic.server.security.oauth2.CustomOAuth2User;

public class FacebookOAuth2User implements CustomOAuth2User {
    
    private final DefaultOAuth2User oAuth2User;

    public FacebookOAuth2User(DefaultOAuth2User oAuth2User) {
        this.oAuth2User = oAuth2User;
    }

    @Override
    public String getId() {
        return this.oAuth2User.getAttribute("id");
    }

    @Override
    public String getEmail() {
        return this.oAuth2User.getAttribute("email");
    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.oAuth2User.getAttributes();
    }
}
