import React, { useState } from 'react';
import "../styles/Navbar.css";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            <img src={logo} alt="Logo" className="logo-outside" />
          </a>
        </div>
        <div className="nav__menu__btn" onClick={handleMenuToggle}>
          <span>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </span>
        </div>
      </div>
      <ul className={`nav__links ${isMenuOpen ? "open" : ""}`}>
        {/* <li className="logo-inside">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </li> */}
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Speakers</a></li>
        <li><a href="#">Sponsors</a></li>
        <li><a href="#">Glimpses</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="nav__btns">
        <button className="btn sign__in">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;