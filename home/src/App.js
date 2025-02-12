import React from "react";
import { Route, Routes, useNavigate , useLocation} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Slider from "react-slick"; 

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F20-amazing-eye-drawing-ideas-inspiration-in-2023--516999232237731761%2F&psig=AOvVaw0TpNK7JA0vHNuWfo56h4Bu&ust=1738962257181000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODs_q_5r4sDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.exoticindiaart.com%2Fproduct%2Fpaintings%2Findian-beauty-pencil-sketch-vandana-verma-ldb918%2F&psig=AOvVaw0Le1tihpzxihnKJvVWHPUE&ust=1738962325593000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCIydH5r4sDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.exoticindiaart.com%2Fproduct%2Fpaintings%2Findian-bride-pencil-sketch-vandana-verma-ldb919%2F&psig=AOvVaw0Le1tihpzxihnKJvVWHPUE&ust=1738962325593000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCIydH5r4sDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoolartindia.in%2Fcollection%2F%3Ftype%3D1%26id%3D7&psig=AOvVaw0Le1tihpzxihnKJvVWHPUE&ust=1738962325593000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCIydH5r4sDFQAAAAAdAAAAABAQ",
  ];

  return (
    <div className="App">
      <header className="first">
        <img
          src="https://github.com/Ankatkd/E-waste-project/blob/main/pngwing.com.png?raw=true"
          alt="Logo"
          className="image"
        />
        <nav className="navbar">
          <h1 className="topic">E-waste Solution</h1>
          <ul>
            <li>
              <button className="button" onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li>
              <button className="button" onClick={() => navigate("/register")}>
                Signup
              </button>
            </li>
            <li>
              <button className="button" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
            <li>
              <button className="button" onClick={() => navigate("/Bussiness")}>
                Bussiness
              </button>
            </li>
            <li>
              <button className="button" onClick={() => navigate("/Charity")}>
                Charity
              </button>
            </li>
          </ul>
        </nav>
        
      </header>

      {location.pathname === "/login" || location.pathname === "/register" ? (
        <div className="content-container">
          {/* Login/Register Form */}
          <div className="form-container">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>

          {/* New Image Slider */}
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}


      <footer className="footer">
        <p>© 2025 E-Waste Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
