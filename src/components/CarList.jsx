import React from "react";
import CarItem from "./CarItem";
import "../styles/styles.css";
function CarList({ cars, wishlist, toggleWishlist }) {
  if (!cars || cars.length === 0) {
    return <p>No cars available.</p>;
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarItem
          key={car.id}
          car={car}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      ))}
    </div>
  );
}

export default CarList;
