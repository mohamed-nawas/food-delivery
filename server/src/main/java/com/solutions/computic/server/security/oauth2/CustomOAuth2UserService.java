package com.solutions.computic.server.security.oauth2;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.solutions.computic.server.entities.AuthDetails;
import com.solutions.computic.server.repositories.AuthRepository;
import com.solutions.computic.server.security.oauth2.enums.AuthProvider;
import com.solutions.computic.server.security.oauth2.exceptions.OAuth2AuthenticationProcessingException;
import com.solutions.computic.server.security.oauth2.repositories.OAuth2UserRepository;

@Service
public class CustomOAuth2UserService {

    private final OAuth2UserRepository oAuth2UserRepository;
    private final AuthRepository authRepository;

    @Autowired
    public CustomOAuth2UserService(OAuth2UserRepository oAuth2UserRepository, AuthRepository authRepository) {
        this.oAuth2UserRepository = oAuth2UserRepository;
        this.authRepository = authRepository;
    }

    public OAuth2User processOAuth2User(String clientRegistrationId, OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(clientRegistrationId,
                oAuth2User.getAttributes());

        if (!StringUtils.hasLength(oAuth2UserInfo.getEmail())) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        Optional<com.solutions.computic.server.security.oauth2.entities.OAuth2User> oAuth2UserOptional = oAuth2UserRepository.findByEmail(oAuth2UserInfo.getEmail());
        Optional<AuthDetails> userOptional = authRepository.findByEmail(oAuth2UserInfo.getEmail());
        com.solutions.computic.server.security.oauth2.entities.OAuth2User user;
        if (oAuth2UserOptional.isPresent() || userOptional.isPresent()) {
            if (oAuth2UserOptional.isPresent()) {
                user = oAuth2UserOptional.get();
                if (!user.getProvider().equals(AuthProvider.valueOf(clientRegistrationId.toUpperCase()))) {
                    throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
                            user.getProvider() + " account. Please use your " + user.getProvider() +
                            " account to login.");
                }
                user = updateExistingUser(user, oAuth2UserInfo);
            } else {
                throw new OAuth2AuthenticationProcessingException("Looks like you're signup up with the same email with a password, Please login using those credentials");
            }
        } else {
            user = registerNewUser(clientRegistrationId, oAuth2UserInfo);
        }

        return UserPrincipal.create(user, oAuth2User.getAttributes());
    }

    private com.solutions.computic.server.security.oauth2.entities.OAuth2User registerNewUser(String clientRegistrationId, OAuth2UserInfo oAuth2UserInfo) {
        var user = new com.solutions.computic.server.security.oauth2.entities.OAuth2User();

        user.setProvider(AuthProvider.valueOf(clientRegistrationId.toUpperCase()));
        user.setProviderId(oAuth2UserInfo.getId());
        user.setName(oAuth2UserInfo.getName());
        user.setEmail(oAuth2UserInfo.getEmail());
        return oAuth2UserRepository.save(user);
    }

    private com.solutions.computic.server.security.oauth2.entities.OAuth2User updateExistingUser(com.solutions.computic.server.security.oauth2.entities.OAuth2User existingUser, 
    OAuth2UserInfo oAuth2UserInfo) {
        existingUser.setName(oAuth2UserInfo.getName());
        return oAuth2UserRepository.save(existingUser);
    }
}