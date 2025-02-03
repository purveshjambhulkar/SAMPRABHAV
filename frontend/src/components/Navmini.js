import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import "../styles/Navmini.css"; // Adjust the path as needed
import logo from "../assests/logo.png"; // Adjust the path as needed

const NavbarSimple = ({ onGoBack }) => {
  return (
    <nav className="navbar-simple">
      <img src={logo} alt="Logo" className="navbar-simple__logo" />
      <button onClick={onGoBack} className="navbar-simple__back-btn">
        <FaArrowLeft size={20} />
        <span className="navbar-simple__back-text">Go Back</span>
      </button>
    </nav>
  );
};

export default NavbarSimple;
