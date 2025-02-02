import React from "react";
import styles from "../styles/Sponsors.module.css"; // Import CSS Module

// Importing images from assets
import ADM from "../assests/Sponsors/ADM.png";
import SAPIENS from "../assests/Sponsors/SAPIENS.png";
import TORQUE from "../assests/Sponsors/TORQUE.png";
import XL from "../assests/Sponsors/XL.png";
import SCH from "../assests/Sponsors/SCH.svg";
import GURU from "../assests/Sponsors/GURU.png";
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
      className: styles.titleBorder,
      color: "#800020",
    },
    {
      name: "PharmaSapience",
      logo: SAPIENS,
      type: "CoTitle Sponsor",
      className: styles.titleBorder,
      color: "#800020",
    },
  ],
  platinum: [
    {
      name: "Torque Pharmaceuticals",
      logo: TORQUE,
      type: "Platinum Sponsor",
      className: styles.platinumBorder,
      color: "#004953",
    },
    {
      name: "XL Laboratories Pvt. Ltd.",
      logo: XL,
      type: "Platinum Sponsor",
      className: styles.platinumBorder,
      color: "#004953",
    },
    {
      name: "Scholavar",
      logo: SCH,
      type: "Platinum Sponsor",
      className: styles.platinumBorder,
      color: "#004953",
    },
  ],
  gold: [
    {
      name: "Bitta Studio",
      logo: BITTA,
      type: "Gold Sponsor",
      className: styles.goldBorder,
      color: "#4B0082",
    },
    {
      name: "Canam",
      logo: CANAM,
      type: "Gold Sponsor",
      className: styles.goldBorder,
      color: "#4B0082",
    },
  ],
  food: [
    {
      name: "Guru Nanak Sweets",
      logo: GURU,
      type: "Food Sponsor",
      className: styles.foodBorder,
      color: "#B8860B",
    },
    {
      name: "Roaming Routes 360",
      logo: ROAMING_ROUTES,
      type: "Travel Sponsor",
      className: styles.foodBorder,
      color: "#B8860B",
    },
  ],
};

// Sponsor Card Component
const SponsorCard = ({ sponsor }) => {
  return (
    <div className={`${styles.sponsorCard} ${sponsor.className}`}>
      <img src={sponsor.logo} alt={sponsor.name} />
      <p className={styles.sponsorName}>{sponsor.name}</p>
      <p className={styles.sponsorType} style={{ color: sponsor.color }}>
        {sponsor.type}
      </p>
    </div>
  );
};

// Sponsor Row Component
const SponsorRow = ({ sponsors }) => (
  <div className={styles.sponsorRow}>
    {sponsors.map((sponsor, index) => (
      <SponsorCard key={index} sponsor={sponsor} />
    ))}
  </div>
);

// Main Sponsors Component
const Sponsors = () => {
  return (
    <div className={styles.sponsorsContainer}>
      <div className={styles.imgContainerSponsors}></div>
      <h2 className={styles.sponsorsTitle}>
        Our <span>Sponsors</span>
      </h2>

      {Object.values(sponsorsData).map((sponsors, index) => (
        <SponsorRow key={index} sponsors={sponsors} />
      ))}
    </div>
  );
};

export default Sponsors;
