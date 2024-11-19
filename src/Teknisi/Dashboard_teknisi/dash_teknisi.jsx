import React from "react";
import "./dash_teknisi.css";
import backgroundImage from "../../assets/background_awal.jpg"; 
import logoImage from "../../assets/logo-lengkap.png"; // Assuming your logo is in this file
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const DashboardTeknisi = () => {
  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Navbar */}
      <nav className="navbar" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "5px 20px", height: "60px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
          <img src={logoImage} alt="FOURA NET" style={{ width: '70px', height: 'auto' }} /> {/* Logo size */}
          <span style={{ marginLeft: "10px", fontSize: "24px", fontWeight: "bold", color: "#333" }}>FOURA</span> {/* "FOURA" text next to the logo */}
        </div>
      </nav>

      {/* Content */}
      <div className="content" style={{ top: "20%" }}>
        <h1>FOURA NET</h1>
        <p>Accelerate, Adapt, Achieve, Always Connected</p>
        
        {/* Additional Text */}
        <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "normal", color: "#333", textAlign: "center" }}>
          Selamat Datang di Four A Net!<br />
          Kami berkomitmen untuk mendukung manajemen aktivitas dan operasional Anda dengan solusi yang terpercaya, aman, dan efisien. Percayakan langkah Anda kepada kami!
        </p>
        
        {/* Use Link to navigate to the login page */}
        <Link to="/login">
          <button className="learn-more">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardTeknisi;
