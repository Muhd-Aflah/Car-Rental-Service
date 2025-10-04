// src/Pages/WishlistPage.jsx
import React, { useState, useEffect } from "react";
const [wishlist, setWishlist] = useState([]);
import carsData from "../data/cars.json";
import "../styles/styles.css";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when page loads
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove a car from wishlist
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((carId) => carId !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Filter wishlist cars from main data
  const wishlistCars = carsData.filter((car) => wishlist.includes(car.id));

  return (
    <div className="wishlist-page">
      <h2>❤️ My Wishlist</h2>

      {wishlistCars.length === 0 ? (
        <p>No cars in your wishlist yet.</p>
      ) : (
        <div className="car-grid">
          {wishlistCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3>{car.name}</h3>
              <p>Type: {car.type}</p>
              <p>Price: ${car.price}/day</p>
              <button onClick={() => removeFromWishlist(car.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
