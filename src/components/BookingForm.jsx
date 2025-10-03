import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/styles.css";

export default function BookingForm() {
  const location = useLocation();
  const car = location.state?.car;

  return (
    <div className="booking-container">
      <div className="booking-form">
        <h2>Booking Form</h2>
        <form>
          <label>Car</label>
          <input type="text" value={car?.name || ""} readOnly />

          <label>Price</label>
          <input type="text" value={car?.price || ""} readOnly />

          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Pick-up Date</label>
          <input type="date" required />

          <label>Drop-off Date</label>
          <input type="date" required />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
