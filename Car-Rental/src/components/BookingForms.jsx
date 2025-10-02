import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ car }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();

  function calcDays(pick, drop) {
    if (!pick || !drop) return 0;
    const a = new Date(pick);
    const b = new Date(drop);
    const diff = Math.ceil((b - a) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }

  const days = calcDays(pickup, dropoff);
  const total = days * car.pricePerDay;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || days <= 0) {
      alert("Please provide name, email and valid dates (drop-off must be after pickup).");
      return;
    }
    const booking = {
      id: Date.now(),
      carId: car.id,
      carName: car.name,
      name,
      email,
      phone,
      pickup,
      dropoff,
      days,
      total,
      status: "active"
    };
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    alert("Booking saved!");
    navigate("/bookings");
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book this car</h3>
      <label>Name<input value={name} onChange={(e)=>setName(e.target.value)} required/></label>
      <label>Email<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
      <label>Phone<input value={phone} onChange={(e)=>setPhone(e.target.value)} /></label>
      <label>Pickup date<input type="date" value={pickup} onChange={(e)=>setPickup(e.target.value)} required/></label>
      <label>Drop-off date<input type="date" value={dropoff} onChange={(e)=>setDropoff(e.target.value)} required/></label>
      <p>Days: {days} — Total: ${total}</p>
      <button className="btn" type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
