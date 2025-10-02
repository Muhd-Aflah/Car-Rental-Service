import React from "react";
import CarItem from "./CarItem.jsx";
import cars from "../data/cars.json";
import CarItem from "./CarItem";

function CarList({ cars }) {
  if (!cars.length) return <p>No cars found.</p>;
  return (
    <div className="car-grid">
      {cars.map((car) => <CarItem key={car.id} car={car} />)}
    </div>
  );
}

export default CarList;

