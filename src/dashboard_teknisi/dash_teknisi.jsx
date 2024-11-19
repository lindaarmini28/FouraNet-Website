import React from "react";
import "./dash_teknisi.css";
import backgroundImage from "../assets/background_awal.jpg"; 

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
      <nav className="navbar">
        <div className="logo">FOURA NET</div>
        <button className="sign-in">Sign In</button>
      </nav>

      {/* Content */}
      <div className="content" style={{ top: "20%" }}>
        <h1>Technician Dashboard</h1>
        <p>Manage your tasks, tools, and environment efficiently.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default DashboardTeknisi;