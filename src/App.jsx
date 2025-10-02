import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CarsPage from "./Pages/CarsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
