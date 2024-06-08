// Navbar.js
import React from 'react';
import './css/Navbar.css'; // Import the CSS file
import logoImage from './Images/seamlessLogo.jpg'; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Testimonies">Testimonies</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
