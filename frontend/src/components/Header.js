import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "../styles/Navbar.css";
import header from "../assests/header.png";

const Header = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    ScrollReveal().reveal('.header__image img', { ...scrollRevealOption, origin: 'right' });
    ScrollReveal().reveal('.header__content h1', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.header__content p', { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal('.header__content form', { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal('.header__content .bar', { ...scrollRevealOption, delay: 2000 });
  }, []);

  return (
    <header className="header__container">
      <div className="header__image">
        <img src={header} alt="header" />
      </div>
      <div className="header__content">
        <h1>
          SAMPRABHAV 2025<br /> <span style={{ color: '#0286c8' }}>NIPER MOHALI</span>
        </h1>
        <p style={{ color: "white", fontWeight: 600 }}>
          Join SAMPRABHAV 2026 at NIPER Campus Mohali, Punjab on February 22-23, featuring 12+ speakers sharing insights on pharmaceutical management. Don't miss this premier event for knowledge exchange and networking!
        </p>
        <form action="/">
          <div className="input__row">
            <div className="input__group">
              <h5 style={{ color: "white" }}>Destination</h5>
              <div>
                <span><i className="ri-map-pin-line"></i></span>
                <input type="text" placeholder="NIPER MOHALI" />
              </div>
            </div>
            <div className="input__group">
              <h5 style={{ color: "white" }}>Date</h5>
              <div>
                <span><i className="ri-calendar-2-line"></i></span>
                <input type="text" placeholder="22-23Feb 25" />
              </div>
            </div>
          </div>
          <a href="https://forms.gle/Hcogzn1QKBxKXKUbA" target="_blank" rel="noopener noreferrer">
            <button>Register</button>
          </a>
        </form>
      </div>
    </header>
  );
};

export default Header;
 