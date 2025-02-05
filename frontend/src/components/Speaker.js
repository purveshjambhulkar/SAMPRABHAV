import React from 'react';
import styles from '../styles/Speakers.module.css';
import { motion } from "framer-motion";

// Import speaker images from "../assests/Speakers/"
import speaker1 from "../assests/Speakers/1.png";
import speaker2 from "../assests/Speakers/2.png";
import speaker3 from "../assests/Speakers/3.png";
import speaker4 from "../assests/Speakers/4.png";
import speaker5 from "../assests/Speakers/5.png";
import speaker6 from "../assests/Speakers/6.png";
import speaker7 from "../assests/Speakers/7.png";
import speaker8 from "../assests/Speakers/8.png";
import speaker9 from "../assests/Speakers/9.png";


import chiefGuestImage from "../assests/Speakers/chiefGuest.png"; // Replace with actual image
import chairpersonImage from "../assests/Speakers/chairperson.png"; 

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assests/logo.png";

const speakerImages = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6, speaker7, speaker8, speaker9];

const buckets = [
  {
    title: "Fueling Pharma Success: The Power of Digital and Global Marketing",
    speakers: [
      { id: 1, name: "Hirak Bose", designation: "Senior Vice President, Sales and Marketing, Lupin Ltd.", linkedin: "https://www.linkedin.com/in/hirak-bose-a9233083" },
      { id: 2, name: "Manish Bajaj", designation: "Cluster Head at Dr Reddy's Laboratories", linkedin: "https://www.linkedin.com/in/manish-bajaj-7b1993" }
    ]
  },
  {
    title: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
    speakers: [
      { id: 3, name: "Mr. Gopal Rao", designation: "Associate Vice President, Business Development and Licensing, Biocon Biologics", linkedin: "https://www.linkedin.com/in/gopal-rao-68936412", category: "Biologics" },
      { id: 4, name: "Ajay Kumar Shukla", designation: "Sales Manager (Medtronic)", linkedin: "https://www.linkedin.com/in/ajayy-kumar-shuklaa-090b501b", category: "Medical devices" }
    ]
  },
  // {
  //   title: "Re-envisioning boundaries: Transformative Strategies for Business and Product Excellence (Speaker to be determined)",
  //   speakers: []
  // },
  {
    title: "Redefining Talent Paradigms: Crafting Future Workforce",
    speakers: [
      { id: 5, name: "Megha Soni", designation: "Associate Director-People Success, Solutionec", linkedin: "https://www.linkedin.com/in/megha-soni" },
      { id: 6, name: "Uday Kanth", designation: "Senior Manager-HR, Trinity Life Sciences", linkedin: "https://www.linkedin.com/in/udaykanthg" }
    ]
  },
  {
    title: "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
    speakers: [
      { id: 7, name: "Mr. Virendra Kumar", designation: "Founder & CEO, AdametNext", linkedin: "https://www.linkedin.com/in/virendrakumar1009", category: "CI" },
      { id: 8, name: "Ms. Ritu Rana", designation: "Senior Manager-Forecasting CoE, Axtria", linkedin: "https://www.linkedin.com/in/ritu-rana-71a52641", category: "Forecasting" },
      { id: 9, name: "Mr. Suresh Pemmaraju", designation: "Associate Vice President, Molekule Consulting", linkedin: "https://www.linkedin.com/in/suresh-pemmaraju-a812929", category: "Strategic Consulting" }
    ]
  }
];

const Speakers = () => {
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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link to="/glimpse">Glimpses</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className={styles.backBtnContainer}>
          <button onClick={handleGoBack} className={styles.backButton}>
            <FaArrowLeft size={24} className={styles.arrowIcon} />
            <span className={styles.backText}>Go Back</span>
          </button>
        </div>
      </div>
    <div className={styles.speakersSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={`${styles.meetaSectionTitle} text-center`}>
          {/* <h4 className={styles.subTitle}>Speakers</h4> */}
          <h2 className={styles.mainTitle}>World Class Speakers</h2>
        </div>
        <br /><br />

        {/* New Chief Guest and Chairperson Sections */}
        <div className={styles.specialGuestSection}>
            <div className={styles.specialGuestContainer}>
              <div className={styles.specialGuestCard}>
                <div className={styles.specialGuestImageWrapper}>
                  <img 
                    src={chiefGuestImage} 
                    alt="Chief Guest" 
                    className={styles.specialGuestImage}
                  />
                </div>
                <div className={styles.specialGuestContent}>
                  <h3 className={styles.specialGuestTitle}>Chief Guest</h3>
                  <p className={styles.specialGuestName}>Dr. Subba Rao Chaganti</p>
                  <p className={styles.specialGuestDesignation}>Executive Coach, Mentor, Author</p>
                </div>
              </div>

              <div className={styles.specialGuestCard}>
                <div className={styles.specialGuestImageWrapper}>
                  <img 
                    src={chairpersonImage} 
                    alt="Chairperson" 
                    className={styles.specialGuestImage}
                  />
                </div>
                <div className={styles.specialGuestContent}>
                  <h3 className={styles.specialGuestTitle}>Chairperson</h3>
                  <p className={styles.specialGuestName}>Dr. Vinay Lohariwala
                  </p>
                  <p className={styles.specialGuestDesignation}>Managing Director at Innova Captab Ltd </p>
                </div>
              </div>
            </div>
          </div>

        {buckets.map((bucket, index) => (
          <div key={index} className={styles.speakerBucketContainer}>
            <div className={`${styles.secTitle} text-center`}>
              <h3 className={styles.title}>{bucket.title}</h3>
            </div>
            <div className={`${styles.speakerRowContainer}`}>
              {bucket.speakers.length > 0 ? (
                bucket.speakers.map((speaker) => (
                  <div key={speaker.id} className={styles.speakerCardWrapper}>
                    <div className={styles.singleSpeaker}>
                      <div className={styles.speakerImage}>
                        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={speakerImages[(speaker.id - 1) % speakerImages.length]} 
                            alt={speaker.name} 
                          />
                        </a>
                      </div>
                      <div className={styles.speakerContent}>
                        <h4 className={styles.speakerName}>
                          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">{speaker.name}</a>
                        </h4>
                        <p className={styles.speakerDesignation}>
                          {speaker.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noSpeakerMessage}>
                  <p>Speaker to be determined</p>
                </div>
              )}
            </div>
            <br /><br />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Speakers;