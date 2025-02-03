import React from "react";
import styles from "../styles/Sponsors.module.css";
import { motion } from "framer-motion";

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

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assests/logo.png";

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
    }
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
    }
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
    }
  ]
};

// Sponsor Card Component
const SponsorCard = ({ sponsor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${styles.sponsorCard} ${sponsor.className}`}
    >
      <div className={styles.sponsorLogoContainer}>
        <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorLogo} />
      </div>
      <h3 className={styles.sponsorName}>{sponsor.name}</h3>
      <p className={styles.sponsorType} style={{ color: sponsor.color }}>
        {sponsor.type}
      </p>
    </motion.div>
  );
};

// Sponsor Row Component
const SponsorRow = ({ sponsors }) => (
  <div className={styles.sponsorRow}>
    {sponsors.map((sponsor, index) => (
      <SponsorCard key={index} sponsor={sponsor} index={index} />
    ))}
  </div>
);

// Main Sponsors Component
const Sponsors = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className={styles.topNav}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Samprabhav Logo" className={styles.logo} />
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><Link to="/glimpse">Glimpses</Link></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={styles.backBtnContainer}>
          <button onClick={handleGoBack} className={styles.backButton}>
            <FaArrowLeft size={24} className={styles.arrowIcon} />
            <span className={styles.backText}>Go Back</span>
          </button>
        </div>
      </div>

      <div className={styles.sponsorsContainer}>
        <div className={styles.imgContainerSponsors}></div>
        <h2 className={styles.sponsorsTitle}>
          Our <span>Sponsors</span>
        </h2>

        {Object.values(sponsorsData).map((sponsors, index) => (
          <SponsorRow key={index} sponsors={sponsors} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;