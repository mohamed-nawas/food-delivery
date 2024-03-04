package com.solutions.computic.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.solutions.computic.server.entities.AuthDetails;
import com.solutions.computic.server.exceptions.FoodDeliveryException;
import com.solutions.computic.server.exceptions.UserAlreadyExistsException;
import com.solutions.computic.server.exceptions.UserNotFoundException;
import com.solutions.computic.server.repositories.AuthRepository;

@Service
public class AuthService {

    private final AuthRepository repository;
    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AuthService(AuthRepository authRepository) {
        this.repository = authRepository;
    }

    public AuthDetails createUser(String name, String email, String password) {
        try {
            var optionalUser = repository.findByEmail(email);
            if (optionalUser.isPresent()) {
                throw new UserAlreadyExistsException("User already exists in DB");
            }
            var user = new AuthDetails(name, email, password);
            return repository.save(user);
        } catch (DataAccessException e) {
            throw new FoodDeliveryException("Error occurred when creating user in DB", e);
        }
    }

    public AuthDetails login(String email, String pwd) {
        try {
            var optionalUser = repository.findByEmail(email);
            if (!optionalUser.isPresent()) {
                throw new UserNotFoundException("User with given email not found in DB");
            }
            var user = optionalUser.get();
            if (!passwordEncoder.matches(pwd, user.getPwd())) {
                throw new UserNotFoundException("User with given email and pwd combination not found in DB");
            }
            return user;
        } catch (DataAccessException e) {
            throw new FoodDeliveryException("Error occurred when finding user by email and pwd from DB", e);
        }
    }
}
