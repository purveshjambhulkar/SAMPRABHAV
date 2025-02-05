import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar2.css"; // Ensure the path is correct for your project
import logo from "../assests/logo.png";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar2">
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#home">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="nav__menu__btn" onClick={handleMenuToggle}>
          <span>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </span>
        </div>
      </div>

      <ul
        className={`nav__links ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><Link to="/glimpse">Glimpses</Link></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="/faq">FAQs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav__btns">
        <a
          href="https://forms.gle/1DuWSpaQY9DFwS6UA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn sign__in">Register</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar2;
    