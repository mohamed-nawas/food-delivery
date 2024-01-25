package com.solutions.computic.server.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.solutions.computic.server.entities.AuthDetails;
import com.solutions.computic.server.repositories.AuthRepository;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AuthRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var optionalUser = repository.findByEmail(username);
        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("User credential is wrong");
        }
        AuthDetails user = optionalUser.get();
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user.getRoleType().toString());
        authorities.add(authority);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPwd(), authorities);
    }
}
