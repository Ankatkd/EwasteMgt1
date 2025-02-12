import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Profile() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ userDetails,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (userDetails.name.length<=3) {
        alert("Please Try entering the Full Name");
        return;
      }
      if (!userDetails.email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }
      if (!userDetails.email.includes(".com")) {
        alert("Please enter a valid email .com ");
        return;
      }
      if (userDetails.password !==userDetails.cpassword) {
        alert("Confirm password should match password");
        return;
      }
    const data = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
      
    };

    // try {
    //   await axios.post("http://localhost:8081/api/users/addUser", data);
    //   alert("Registration Successful!");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Error occurred during registration.");
    // }
  };


  return (
    <div className="profile-container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="tab">
            <img src = "https://github.com/Ankatkd/E-waste-project/blob/main/image.png?raw=true"
            alt="Logo" className="logo"/>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="tab-input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="tab-input"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              className="tab-input"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              className="tab-input"
              placeholder="Address"
              required
            />
            <button type="submit" className="tab-button">Submit</button>
          </div>
        </form>
      ) : (
        <div className="tab">
          <h1>Profile Details</h1>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
          <button onClick={handleEdit} className="tab-button">Edit</button>
          <button onClick={handleSave} className="tab-button">Submit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
