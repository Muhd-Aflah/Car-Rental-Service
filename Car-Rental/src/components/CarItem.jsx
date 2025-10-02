import React from "react";
import { Link } from "react-router-dom";

function CarItem({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.type} • {car.seats} seats • {car.transmission}</p>
      <p className="price">${car.pricePerDay}/day</p>
      <Link to={`/cars/${car.id}`} className="btn">View Details</Link>
    </div>
  );
}

export default CarItem;
