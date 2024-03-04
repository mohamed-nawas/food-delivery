package com.solutions.computic.server.security.oauth2;

import java.util.Map;

import com.solutions.computic.server.security.oauth2.exceptions.OAuth2AuthenticationProcessingException;

import static com.solutions.computic.server.security.oauth2.enums.AuthProvider.GOOGLE;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(GOOGLE.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}