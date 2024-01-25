package com.solutions.computic.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solutions.computic.server.entities.AuthDetails;

@Repository
public interface AuthRepository extends JpaRepository<AuthDetails, String> {

    // @Query("SELECT a FROM AuthDetails a WHERE a.email = :email AND a.pwd =: pwd")
    Optional<AuthDetails> findByEmailAndPwd(String email, String pwd);

    // @Query(value = "SELECT a FROM AuthDetails a WHERE a.email =: email")
    Optional<AuthDetails> findByEmail(String email);
}
