package com.solutions.computic.server.security.oauth2.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solutions.computic.server.security.oauth2.entities.OAuth2User;

@Repository
public interface OAuth2UserRepository extends JpaRepository<OAuth2User, String> {

    Optional<OAuth2User> findByEmail(String email);
}