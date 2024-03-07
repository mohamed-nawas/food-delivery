package com.solutions.computic.server.security.oauth2.github;

import java.util.Map;

import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import com.solutions.computic.server.security.oauth2.CustomOAuth2User;

public class GithubOAuth2User implements CustomOAuth2User {
    
    private final DefaultOAuth2User oAuth2User;

    public GithubOAuth2User(DefaultOAuth2User oAuth2User) {
        this.oAuth2User = oAuth2User;
    }

    @Override
    public String getId() {
        Object id = getAttributes().get("id");
        if (id instanceof String) {
            return (String) id;
        } else if (id instanceof Integer) {
            return ((Integer) id).toString();
        } else {
            throw new IllegalStateException("Unexpected type for GitHub user ID: " + id.getClass());
        }
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
