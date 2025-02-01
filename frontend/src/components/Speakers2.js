import React, { useEffect, useState, useRef } from "react";
import "../styles/Speakers2.css";

// Importing images
import chiefGuestImage from "../assests/Speakers/chief-guest.jpeg";
import speaker1 from "../assests/Speakers/1.png";
import speaker2 from "../assests/Speakers/2.png";
import speaker3 from "../assests/Speakers/3.png";
import speaker4 from "../assests/Speakers/4.png";
import speaker5 from "../assests/Speakers/5.png";
import speaker6 from "../assests/Speakers/6.png";
import speaker7 from "../assests/Speakers/7.png";
import speaker8 from "../assests/Speakers/8.png";

const chiefGuest = {
  name: "Dr. Sanjeev Juneja",
  image: chiefGuestImage,
  description: "Founder, Divisa Herbal Pvt. Ltd., SBS Group of Com",
};

const speakers = [
  {
    name: "Ajay Kumar Shukla",
    image: speaker1,
    description: "Sales Manager, Medtronic",
  },
  {
    name: "Megha Soni",
    image: speaker2,
    description: "Associate Director, People Success, Solutionec",
  },
  {
    name: "Virendra Kumar",
    image: speaker3,
    description: "Senior Manager, Forecasting CoE, Axtria",
  },
  {
    name: "Ritu Rana",
    image: speaker4,
    description: "Chief Executive Officer, India of Reach52",
  },
  {
    name: "Uday Kanth",
    image: speaker5,
    description: "Senior Manager HR, Trinity Life Sciences",
  },
  {
    name: "Manish Baja",
    image: speaker6,
    description: "Cluster Head, Dr Reddy's Laboratories Ltd",
  },
  {
    name: "Suresh Pemmaraju",
    image: speaker7,
    description: "Associate VP, Molekule Consulting",
  },
  {
    name: "Gopal Rao",
    image: speaker8,
    description: "Associate VP, Global BD&L, Biocon Biologics",
  },
];

const Speakers2 = () => {
  const carouselRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState("15s");

  useEffect(() => {
    const duration = Math.max(speakers.length * 2, 15) + "s";
    setAnimationDuration(duration);
  }, []);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="speakers-speakers-container">
      <h2 className="speakers-title">
        These are our esteemed speakers who are pioneers in their fields,
        sharing invaluable insights and expertise.
      </h2>

      <div className="speakers-chief-guest">
        <img src={chiefGuest.image} alt={chiefGuest.name} />
        <div className="speakers-info">
          <h3>{chiefGuest.name}</h3>
          <p className="speakers-description">{chiefGuest.description}</p>
        </div>
      </div>

      <div
        className="speakers-carousel-wrapper"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="speakers-carousel"
          style={{ animationDuration: animationDuration }}
        >
          {speakers.map((speaker, index) => (
            <div className="speakers-speaker-card" key={index}>
              <div className="image-container">
                <img src={speaker.image} alt={speaker.name} />
              </div>

              <h4>{speaker.name}</h4>
              <p className="speakers-description">{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers2;
