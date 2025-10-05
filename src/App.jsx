import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import CarsPage from "./Pages/CarsPage";
import BookingPage from "./Pages/BookingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
