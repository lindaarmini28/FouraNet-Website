import React from "react";
import "./dash_teknisi.css";
import backgroundImage from "../../assets/background_awal.jpg";
import logoImage from "../../assets/logo-lengkap.png";
import { Link } from "react-router-dom";

const DashboardTeknisi = () => {
  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
      }}
    >
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          padding: "10px 20px",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
          <img src={logoImage} alt="FOURA NET" style={{ width: "60px", height: "auto" }} />
          <span style={{ marginLeft: "10px", fontSize: "28px", fontWeight: "bold", color: "#333" }}>
            FOURA
          </span>
        </div>
      </nav>

      {/* Content */}
      <div
        className="content"
        style={{
          textAlign: "right", // Rata kanan
          maxWidth: "600px",
          margin: "auto 10px auto auto", // Posisikan di kanan tengah
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>FOURANET</h1>
        <p style={{ fontSize: "20px", marginBottom: "20px", fontStyle: "italic" }}>
          Accelerate, Adapt, Achieve, Always Connected
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Selamat Datang di Four A Net! Kami berkomitmen untuk mendukung manajemen aktivitas dan
          operasional Anda dengan solusi yang terpercaya, aman, dan efisien. Percayakan langkah
          Anda kepada kami!
        </p>

        <Link to="/login">
          <button
            className="learn-more"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#ffb81d",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Sign In
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer
        style={{
          color: "#ffffff",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        &copy; {new Date().getFullYear()} FOURA NET. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardTeknisi;
