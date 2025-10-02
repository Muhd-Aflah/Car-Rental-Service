import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-car">
      {/* Logo */}
      <div className="logo">🚗 CarRental</div>

      {/* Hamburger Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* ✅ Mobile Buttons (inside dropdown) */}
        <li className="mobile-btns">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="nav-btns">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
