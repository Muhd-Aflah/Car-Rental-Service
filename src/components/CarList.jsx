import React, { useState } from "react";
import CarItem from "./CarItem";
import carsData from "../data/cars.json";

function CarList({ wishlist, toggleWishlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");


  const filteredCars = carsData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || car.type === category;
    const matchesPrice =
      priceRange === "All" ||
      (priceRange === "Below100" && car.price < 100) ||
      (priceRange === "100to200" && car.price >= 100 && car.price <= 200) ||
      (priceRange === "Above200" && car.price > 200);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="car-list-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="All">All Prices</option>
          <option value="Below100">Below $100</option>
          <option value="100to200">$100 - $200</option>
          <option value="Above200">Above $200</option>
        </select>
      </div>

      <div className="car-list">
        {filteredCars.map((car) => (
          <CarItem
            key={car.id}
            car={car}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default CarList;
