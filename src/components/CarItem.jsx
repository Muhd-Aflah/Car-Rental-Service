import React from "react";
import { useNavigate } from "react-router-dom";

function CarItem({ car }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    console.log("👉 Button clicked for car:", car); 
    navigate("/booking", { state: { car } }); 
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>${car.price}/day</p>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default CarItem;
