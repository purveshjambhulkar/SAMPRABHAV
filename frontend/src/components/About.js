import React from "react";
import "../styles/About.css";

// Importing images
import aboutImage from "../assests/about.png";
import rotatingImage from "../assests/circle-blue.png";

const AboutComponent = () => {
  return (
    <div className="about-about-container">
      {/* <span class="icon icon-circle-blue wow fadeIn animated" style="visibility: visible; animation-name: fa-spin;"></span> */}
      <div className="about-greeting">
        WELCOME TO SAMPRABHAV 2025
        <span>Prof. Dulal Panda</span>
      </div>
      <div className="about-contain-image">
        <img src={aboutImage} alt="College host" />
      </div>
      <div className="about-about">
        <span>About Us</span>
        <p>
          Established under the aegis of the 1998 National Institute of
          Pharmaceutical Education and Research Act, NIPER S.A.S. Nagar (Mohali)
          takes pride in being an institute of National importance. NIPER Mohali
          is more than just an educational institution, it is a national
          treasure that has been shaping the future of pharmaceutical education
          in India. As a member of the Association of Indian Universities and
          the Association of Commonwealth Universities, the institution's
          influence extends far beyond national boundaries, garnering
          recognition on a global scale. The institute’s state-of-the-art
          facilities and cutting-edge research programs provide students with
          unparalleled opportunities to engage in breakthrough research and
          innovation, making an indelible mark on the nation and the world.
        </p>
      </div>
      {/* Rotating Image */}
      <img src={rotatingImage} alt="Rotating Design" className="rotating-image" />
    </div>
  );
};

export default AboutComponent;
