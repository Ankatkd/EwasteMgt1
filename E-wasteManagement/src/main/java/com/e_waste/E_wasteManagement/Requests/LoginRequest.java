package com.e_waste.E_wasteManagement.Requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginRequest {

@NotNull(message = "Email is required")
@Email(message = "Invalid email format")
private String email;

@NotNull(message = "Password is required")
@Size(min = 6, message = "Password must be at least 6 characters")
private String password;

public String getEmail() {
    return email;
}

public LoginRequest(@NotNull(message = "Email is required") @Email(message = "Invalid email format") String email,
        @NotNull(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") String password) {
    this.email = email;
    this.password = password;
}

public LoginRequest() {
}

public void setEmail(String email) {
    this.email = email;
}

public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}


}
