import React from "react";
import "../styles/styles.css"; 

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About CarRental</h1>
      <p>
        Welcome to <strong>CarRental</strong> — your trusted car rental service! 🚗  
        We make it easy and affordable to rent your dream car, whether you're 
        planning a weekend getaway, a business trip, or simply need a reliable 
        ride for the day.
      </p>

      <h2>Our Mission</h2>
      <p>
        To provide top-quality vehicles at competitive prices while ensuring 
        a smooth, transparent, and satisfying rental experience for every customer.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>✅ Wide range of cars — from budget to luxury</li>
        <li>✅ Easy online booking process</li>
        <li>✅ Transparent pricing with no hidden fees</li>
        <li>✅ 24/7 customer support</li>
      </ul>

      <p className="thank-you">
        Thank you for choosing CarRental — we’re happy to be part of your journey! ✨
      </p>
    </div>
  );
}

export default AboutPage;
