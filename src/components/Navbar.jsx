
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`navbar-car ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-emoji">🚗</span>
        <span className="logo-text">CarRental</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen((s) => !s)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger">{isOpen ? "✖" : "☰"}</span>
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/cars" onClick={handleLinkClick}>Cars</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>

        <div className="nav-btns mobile-only">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
}
