package com.e_waste.E_wasteManagement.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.e_waste.E_wasteManagement.Requests.LoginRequest;
import com.e_waste.E_wasteManagement.Users.User;
import com.e_waste.E_wasteManagement.UsersRepo.UsersRepo;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return usersRepo.save(user);
    }

    public boolean loginUser(LoginRequest loginRequest) {
        Optional<User> userOptional = usersRepo.findByEmail(loginRequest.getEmail());
        if (userOptional.isEmpty()) {
            System.out.println("User not found for email: " + loginRequest.getEmail());
            return false;
        }

        User user = userOptional.get();
        boolean isPasswordMatch = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());
        if (!isPasswordMatch) {
            System.out.println("Password mismatch for email: " + loginRequest.getEmail());
        }
        return isPasswordMatch;
    }
}
