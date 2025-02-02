import React from "react";
import "../styles/Sponsors.css"; // Import the CSS file

// Importing images from assets
import ADM from "../assests/Sponsors/ADM.png";
import SAPIENS from "../assests/Sponsors/SAPIENS.png";
import TORQUE from "../assests/Sponsors/TORQUE.jpeg.jpg";
import XL from "../assests/Sponsors/XL.png";
import SCH from "../assests/Sponsors/SCH.png";
import GURU from "../assests/Sponsors/GURU.jpg";
import ACC from "../assests/Sponsors/ACC.png";
import ROAMING_ROUTES from "../assests/Sponsors/roming-routes.webp";
import BITTA from "../assests/Sponsors/BITTA.png";
import CANAM from "../assests/Sponsors/canam.svg";

// Sponsors Data
const sponsorsData = {
  title: [
    {
      name: "AdametNext",
      logo: ADM,
      type: "Title Sponsor",
      className: "title-border",
      color: "#800020",
    },
    {
      name: "PharmaSapience",
      logo: SAPIENS,
      type: "CoTitle Sponsor",
      className: "title-border",
      color: "#800020",
    },
  ],
  platinum: [
    {
      name: "Torque Pharmaceuticals",
      logo: TORQUE,
      type: "Platinum Sponsor",
      className: "platinum-border",
      color: "#004953",
    },
    {
      name: "XL Laboratories Pvt. Ltd.",
      logo: XL,
      type: "Platinum Sponsor",
      className: "platinum-border",
      color: "#004953",
    },
    {
      name: "Scholavar & Accentale",
      logo: SCH,
      type: "Platinum Sponsor",
      className: "platinum-border",
      color: "#004953",
    },
  ],
  food: [
    {
      name: "Guru Nanak Sweets",
      logo: GURU,
      type: "Food Sponsor",
      className: "food-border",
      color: "#B8860B",
    },
    {
      name: "Accentale",
      logo: ACC,
      type: "Certificate Sponsor",
      className: "food-border",
      color: "#B8860B",
    },
    {
      name: "Roaming Routes 360",
      logo: ROAMING_ROUTES,
      type: "Food Sponsor",
      className: "food-border",
      color: "#B8860B",
    },
  ],
  gold: [
    {
      name: "Bitta Studio",
      logo: BITTA,
      type: "Gold Sponsor",
      className: "gold-border",
      color: "#4B0082",
    },
    {
      name: "Canam",
      logo: CANAM,
      type: "Gold Sponsor",
      className: "gold-border",
      color: "#4B0082",
    },
  ],
};

// Sponsor Card Component
const SponsorCard = ({ sponsor }) => {
  return (
    <div className={`sponsor-card ${sponsor.className}`}>
      <img src={sponsor.logo} alt={sponsor.name} />
      <p className="sponsor-name">{sponsor.name}</p>
      <p className="sponsor-type" style={{ color: sponsor.color }}>
        {sponsor.type}
      </p>
    </div>
  );
};

// Sponsor Row Component
const SponsorRow = ({ sponsors }) => (
  <div className="sponsor-row">
    {sponsors.map((sponsor, index) => (
      <SponsorCard key={index} sponsor={sponsor} />
    ))}
  </div>
);

// Main Sponsors Component
const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="img-container-sponsors"></div> {/* Corrected class name */}
      <h2 className="sponsors-title">
        Our <span>Sponsors</span>
      </h2>

      {Object.values(sponsorsData).map((sponsors, index) => (
        <SponsorRow key={index} sponsors={sponsors} />
      ))}
    </div>
  );
};

export default Sponsors;
