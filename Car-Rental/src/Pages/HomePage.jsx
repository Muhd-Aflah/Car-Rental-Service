import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Ride</h1>
          <p>Reliable cars. Affordable prices. Easy booking.</p>
          <Link to="/cars">
            <button className="btn-primary">Browse Cars</button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>🚗 Wide Selection</h3>
            <p>Choose from economy, sedan, SUV, and luxury cars.</p>
          </div>
          <div className="why-card">
            <h3>💰 Best Prices</h3>
            <p>Affordable rates with no hidden charges.</p>
          </div>
          <div className="why-card">
            <h3>📅 Easy Booking</h3>
            <p>Book your car online in just a few clicks.</p>
          </div>
          <div className="why-card">
            <h3>⭐ Trusted Service</h3>
            <p>Thousands of happy customers every year.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Car Rental Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
