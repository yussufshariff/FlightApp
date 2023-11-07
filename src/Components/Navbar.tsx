import React, { useState } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar(isSmaller: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar ${isMenuOpen ? "active" : ""} ${
        isSmaller ? "Navbar" : "smallerNavbar"
      }`}
    >
      <GiHamburgerMenu className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </GiHamburgerMenu>
      <div className="brand-title">✈️ Take Flight</div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Profile">My Profile</a>
          </li>
          <li>
            <a href="/Bookings">My Bookings</a>
          </li>
          <li>
            <a href="/Contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
