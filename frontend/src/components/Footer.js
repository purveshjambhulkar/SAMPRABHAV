// Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import '../styles/Footer.css';
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-about">
            Samprabhav - Union of Magnates, is a national pharma colloquium held by students of DOPM 
            as a continuation of our yearly custom. The colloquium provides the top pharmaceutical minds 
            in the nation with a forum for interaction, discussion, and the establishment of new connections.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/school/dopm-niper-sasnagar/" className="social-icon">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.instagram.com/dopm_niper_m/" className="social-icon">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/81mg.niper?mibextid=ZbWKwL" className="social-icon">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <BiTime size={20} />
            <p>Mon - Fri: 09:00 - 18:00</p>
          </div>
          <div className="contact-info">
            <BsTelephone size={18} />
            <p>Prathamesh Jambhulkar:<br/> +91 9373208758</p>
          </div>
          <div className="contact-info">
            <BsTelephone size={18} />
            <p>Aarti Prakash:<br/> +91 6204888594</p>
          </div>
          <div className="contact-info">
            <HiOutlineMail size={20} />
            <p>Email: reg.samprabhav2025@gmail.com</p>
          </div>
          <div className="contact-info">
            <IoLocationOutline size={20} />
            <p>Department of Pharmaceutical Management, NIPER-Mohali Sector-67, S.A.S. Nagar (Mohali)-160062, Punjab (India).</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 All Rights Reserved by Samprabhav</p>
      </div>
    </footer>
  );
};

export default Footer;
