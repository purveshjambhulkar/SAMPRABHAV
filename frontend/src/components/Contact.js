import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/Contact.module.css"; // Import CSS module
import logo from "../assests/black-logo.png";

const Contact = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className={styles.contactSection}>
      {/* Top Navigation Bar */}
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
            <Link to="#schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={styles.backBtnContainer}>
          <button onClick={handleGoBack} className={styles.backButton}>
            <FaArrowLeft size={24} className={styles.arrowIcon} />
            <span className={styles.backText}>Go Back</span>
          </button>
        </div>
      </div>

      {/* Contact Content */}
      <motion.div 
        className={styles.contactContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className={styles.contactTitle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <p>Riya Jangra: +91 7009287587</p>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <p>Kunal Neve: +91 8200757395</p>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <p>
              Email:{" "}
              <a href="mailto:reg.samprabhav2025@gmail.com">
                reg.samprabhav2025@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.socialMedia}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/school/dopm-niper-sasnagar/" target="_blank" rel="noopener noreferrer">
            <div className={styles.socialIcon}>
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://www.instagram.com/dopm_niper_m/" target="_blank" rel="noopener noreferrer">
            <div className={styles.socialIcon}>
              <FaInstagram />
            </div>
          </a>
          <a href="https://www.facebook.com/81mg.niper?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <div className={styles.socialIcon}>
              <FaFacebookF />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
