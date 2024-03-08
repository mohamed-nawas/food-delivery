package com.solutions.computic.server.security.oauth2.github;

import java.util.Map;

import com.solutions.computic.server.security.oauth2.OAuth2UserInfo;

public class GithubOAuth2UserInfo extends OAuth2UserInfo {

    public GithubOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        Integer id = (Integer) attributes.get("id");
        return String.valueOf(id);
    }

    @Override
    public String getName() {
        return (String) attributes.get("name");
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }
}
