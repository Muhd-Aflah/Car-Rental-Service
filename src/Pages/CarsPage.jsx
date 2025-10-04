import React, { useState, useEffect } from "react";
import CarList from "../components/CarList";
import carsData from "../data/cars.json";

function CarsPage() {
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  // Toggle wishlist instantly
  const handleWishlistChange = (id) => {
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter((carId) => carId !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Show wishlist or all cars
  const displayedCars = showWishlist
    ? carsData.filter((car) => wishlist.includes(car.id))
    : carsData;

  // ✅ handle toggle + reset view properly
  const toggleShowWishlist = () => {
    setShowWishlist((prev) => !prev);
  };

  return (
    <div className="cars-page">
      <h2>Available Cars</h2>

      <button
        onClick={toggleShowWishlist}
        style={{
          marginBottom: "1rem",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: showWishlist ? "#ff6464" : "#007bff",
          color: "#fff",
          border: "none",
        }}
      >
        {showWishlist ? "Show All Cars" : "Show Wishlist Only"}
      </button>

      <CarList
        cars={displayedCars}
        wishlist={wishlist}
        toggleWishlist={handleWishlistChange}
      />
    </div>
  );
}

export default CarsPage;
