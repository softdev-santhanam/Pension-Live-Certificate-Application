import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Pages/Home/Home";
import About from "./views/Pages/About/About";
import SignUp from "./views/Pages/SignUp/SignUp";
import Navbar from "./views/Navbar/Navbar";
import Center from "./views/Pages/Center/Center";
import Contact from "./views/Pages/Contact/Contact";
import Create from "./views/Pages/Create/Create";
import Footer from "./views/Pages/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
        {/* Route */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/center" element={<Center />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
