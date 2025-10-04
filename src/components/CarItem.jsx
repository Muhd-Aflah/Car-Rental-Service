import React from "react";
import { useNavigate } from "react-router-dom";

function CarItem({ car, wishlist, toggleWishlist }) {
  const navigate = useNavigate();
  const isSaved = wishlist.includes(car.id);

  const handleBooking = () => {
    navigate("/booking", { state: { car } });
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>${car.price}/day</p>

      <button onClick={handleBooking}>Book Now</button>

      <button
        onClick={() => toggleWishlist(car.id)}
        className={isSaved ? "added" : ""}
      >
        {isSaved ? "❤️ Added" : "🤍 Add to Wishlist"}
      </button>
    </div>
  );
}

export default CarItem;

