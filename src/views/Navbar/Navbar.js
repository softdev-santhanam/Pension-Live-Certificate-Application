import React from "react";
import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css';
import Logo from '../Images/logo.png';

export default function Navbar() {
    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
        }
    }
  return (
    <div className="nav-container">
        
      <nav className="nav-card">
      <img className="logo" src={Logo} alt="logo" />
      <p className="text">Digital Life Certificate for Pensioners</p>
        <NavLink className="navLink" style={navLinkStyle} to="/home">Home</NavLink>
        <NavLink className="navLink" style={navLinkStyle} to="/about">About</NavLink>
        <NavLink className="navLink" style={navLinkStyle} to="/center">Locate a Center</NavLink>
        <NavLink className="navLink" style={navLinkStyle} to="/contact">Contact</NavLink>
        <NavLink className="navLink create" style={navLinkStyle} to="/">SignUp/Login</NavLink>
      </nav>
    </div> 
  );
}
