import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

// Importing the six images for the carousel
import image1 from '../assests/crousel/1.jpeg';
import image2 from '../assests/crousel/2.jpeg';
import image3 from '../assests/crousel/3.jpeg';
import image4 from '../assests/crousel/4.jpeg';
import image5 from '../assests/crousel/5.jpeg';
import image6 from '../assests/crousel/6.jpeg';

const Section1 = () => {
  return (
    <div className="carousel-container">
      {/* Carousel as Background */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={image1} className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={image2} className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={image3} className="d-block w-100" alt="Image 3" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={image4} className="d-block w-100" alt="Image 4" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={image5} className="d-block w-100" alt="Image 5" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={image6} className="d-block w-100" alt="Image 6" />
          </div>
        </div>
      </div>

      {/* Overlay for Navbar and Header */}
      <div className="carousel-overlay">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Section1;
