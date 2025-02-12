import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out all required fields!");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8081/api/users/login", data);
      if (response.data === true) {
        alert("Login Successful");
        navigate("/profile");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No response received from the server. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit}>
        <div className="tab">
          <h1>Login</h1>
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
          <button type="submit" className="tab-button">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
