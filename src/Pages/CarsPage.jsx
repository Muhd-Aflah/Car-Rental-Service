import React from "react";
import "../styles/styles.css";

const CarsPage = () => {
  const cars = [
    { id: 1, name: "Toyota Corolla", price: "$50/day", img: "/src/assets/images/Toyota-Corolla.avif" },
    { id: 2, name: "Honda Civic", price: "$60/day", img: "/src/assets/images/Honda-Civic.webp" },
    { id: 3, name: "Ford Endevour", price: "$90/day", img: "/src/assets/images/Ford-Endevour.webp" },
    { id: 4, name: "BMW 5 Series", price: "$120/day", img: "/src/assets/images/BMW-5series.avif" }
  ];
 return (
    <div className="cars-page">
      <h2>Available Cars</h2>
      <div className="car-grid">
        {cars.map(car => (
          <div className="car-card" key={car.id}>
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button className="btn-primary">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
