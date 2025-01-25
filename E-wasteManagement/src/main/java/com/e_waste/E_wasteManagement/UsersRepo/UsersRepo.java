package com.e_waste.E_wasteManagement.UsersRepo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.e_waste.E_wasteManagement.Users.User;

@Repository
public interface UsersRepo extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}