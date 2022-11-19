import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Navbar/Pages/Home/Home";
import About from "./views/Navbar/Pages/About/About";
import SignUp from "./views/Navbar/Pages/SignUp/SignUp";
import Navbar from "./views/Navbar/Navbar";
import Center from "./views/Navbar/Pages/Center/Center";
import Contact from "./views/Navbar/Pages/Contact/Contact";
import Create from "./views/Navbar/Pages/Create/Create";
import Footer from "./views/Navbar/Pages/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />

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
