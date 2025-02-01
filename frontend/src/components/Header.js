import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "../styles/Navbar.css";
import header from "../assests/header.png";
import headerbg from "../assests/header-bg.png";

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
    ScrollReveal().reveal('.header__image__card', {
      duration: 1000,
      interval: 500,
      delay: 2500,
    });
  }, []);

  return (
    <header className="header__container">
      <div className="header__image">
        <div className="header__image__card header__image__card-1">
          <span><i class="ri-medicine-bottle-line"></i></span>
          <div style={{color: "black"}}>Pharmaceutical Management</div>
          
        </div>
        <div className="header__image__card header__image__card-2">
          <span><i class="ri-building-3-line"></i></span>
          <div style={{color: "black"}}>Industry Networking</div> 
        </div>
        <div className="header__image__card header__image__card-3">
          <span><i class="ri-user-location-line"></i></span>
          <div style={{color: "black"}}>Expert Speakers</div>
        </div>
        <div className="header__image__card header__image__card-4">
          <span><i class="ri-graduation-cap-line"></i></span>
          <div style={{color: "black"}}>Student Development</div>
        </div>
        <img src={header} alt="header" />
      </div>
      <div className="header__content">
        <h1>
          SAMPRABHAV 2025<br /> <span style={{ color: '#0286c8' }}>NIPER MOHALI</span>


        </h1>
        <p style={{color: "white"}}>
        Join SAMPRABHAV 2024 at NIPER Mohali on February 17-18, featuring 15+ speakers sharing insights on pharmaceutical management. Don't miss this premier event for knowledge exchange and networking!
        </p>
        <form action="/">
          <div className="input__row">
            <div className="input__group">
              <h5>Destination</h5>
              <div>
                <span><i className="ri-map-pin-line"></i></span>
                <input type="text" placeholder="Paris, France" />
              </div>
            </div>
            <div className="input__group">
              <h5>Date</h5>
              <div>
                <span><i className="ri-calendar-2-line"></i></span>
                <input type="text" placeholder="17 July 2024" />
              </div>
            </div>
          </div>
          <button >Register</button>
        </form>
        
      </div>
    </header>
  );
};

export default Header;
