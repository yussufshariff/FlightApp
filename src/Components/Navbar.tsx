import React, { useState } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="brand-title"> ✈️ Take Flight </div>
      <GiHamburgerMenu className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </GiHamburgerMenu>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/Home">Home</a>
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
