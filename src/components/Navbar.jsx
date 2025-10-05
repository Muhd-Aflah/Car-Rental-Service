import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-car">
      {/* logo */}
      <div className="logo">
        <div className="logo">🚗 CarRental</div>
      </div>

      {/* hamburger (mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen((s) => !s)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger">{isOpen ? "✖" : "☰"}</span>
      </button>

      {/* links + mobile buttons */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* mobile-only  */}
        <li className="mobile-only nav-btns">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </li>
      </ul>

      {/* desktop buttons */}
      <div className="nav-btns desktop-only">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
