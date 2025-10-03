import React from "react";
import CarItem from "../components/CarItem"; 
import "../styles/styles.css";

const CarsPage = () => {
  const cars = [
    { id: 1, name: "Toyota Corolla", price: 50, image: "/src/assets/images/Toyota-Corolla.avif" },
    { id: 2, name: "Honda Civic", price: 60, image: "/src/assets/images/Honda-Civic.webp" },
    { id: 3, name: "Ford Endeavour", price: 90, image: "/src/assets/images/Ford-Endevour.webp" },
    { id: 4, name: "BMW 5 Series", price: 120, image: "/src/assets/images/BMW-5series.avif" }
  ];

  return (
    <div className="cars-page">
      <h2>Available Cars</h2>
      <div className="car-grid">
        {cars.map(car => (
          <CarItem key={car.id} car={car} />  
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
