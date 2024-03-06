package com.solutions.computic.server.security.oauth2;

import java.util.Map;

public interface CustomOAuth2User {
    
    String getId();

    String getEmail();

    Map<String, Object> getAttributes();
}
