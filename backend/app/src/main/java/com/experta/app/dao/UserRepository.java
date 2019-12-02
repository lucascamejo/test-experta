package com.experta.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.experta.app.model.User;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {    
    List<User> findAll();
    User saveAndFlush(User user);
}


