import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length<=3) {
        alert("Please Try entering the Full Name");
        return;
      }
      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }
      if (!email.includes(".com")) {
        alert("Please enter a valid email .com ");
        return;
      }
      if (password !==cpassword) {
        alert("Confirm password should match password");
        return;
      }
    const data = {
      name: name,
      email: email,
      password: password,
      
    };

    try {
      await axios.post("http://localhost:8081/api/users/addUser", data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred during registration.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="tab">
          <h1>Register</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="tab-input"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="tab-input"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="tab-input"
            placeholder="Password"
          />
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
            className="tab-input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="tab-button">
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
