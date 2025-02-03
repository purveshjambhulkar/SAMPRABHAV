import React, { useState } from "react";
import "../styles/Glimpse.css";  // Or "../styles/Glimpse.module.css" if using CSS modules
import { FaArrowRight, FaSearchPlus, FaArrowLeft } from "react-icons/fa";
import logo from "../assests/black-logo.png";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Import images
import img1 from "../assests/glimpse/1.jpg";
import img2 from "../assests/glimpse/2.jpg";
import img3 from "../assests/glimpse/3.jpg";
import img4 from "../assests/glimpse/4.jpg";
import img5 from "../assests/glimpse/5.jpg";
import img6 from "../assests/glimpse/6.jpg";
import img7 from "../assests/glimpse/7.jpg";
import img8 from "../assests/glimpse/8.jpg";
import img9 from "../assests/glimpse/9.jpg";
import img10 from "../assests/glimpse/10.jpg";
import img11 from "../assests/glimpse/11.jpg";
import img12 from "../assests/glimpse/12.jpg";
import img13 from "../assests/glimpse/13.jpg";
import img14 from "../assests/glimpse/14.jpg";
import img15 from "../assests/glimpse/15.jpg";
import img16 from "../assests/glimpse/16.jpg";

// Import decorative background images
import circleBlue from "../assests/icons/circle-blue.png";
import newCircle from "../assests/icons/newCircle.png";
import iconDots from "../assests/icons/icon-dots.png";
import shape2 from "../assests/icons/shape-2.png";
import abShape2 from "../assests/icons/ab-shape-2.png";

// Create an array of gallery images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,
];

// Chief Guest and Guest of Honor
const chiefGuests = [
  "Dr. Sanjeev Juneja (Guest of Honor, Founder, Divisa Herbals Pvt. Ltd. & SBS Group of Companies)",
  "Mr. Ashok Goyal (Chief Guest, Founder, Director & CEO of Tirupati Group & Chairman of Pontika Aerotech)",
];

const guestSpeakers = [
  "KK Bhagchandani (CEO, Empyrian and CBO, Axcess.io)",
  "Dr. Vikram A. Munshi (Founder & CEO, WhiteSpace Consulting and Capability Building)",
  "Vivek Mishra (Founder and CEO, Fibroheal)",
  "Harmeet Lamba (Founder & CEO, Harmeet Lamba Consultancy & Advisory Services)",
  "Priyanka Srivastava (Senior Associate Director, Eli Lilly and Company)",
  "Tejinder Singh Jassal (General Manager, Convatec)",
  "Vikash Verma (Director of Data Science, Optum)",
  "Nishu Sharma (Senior Manager at AdametNext)",
  "Vivek Shankar Verma (CEO, India reach52)",
  "Dr. Anil K. Angrish (Associate Professor (Finance and Accounting), NIPER S.A.S. Nagar (Mohali))",
  "CA Punit Bansal (Director and Promotor, Theon Pharmaceuticals Ltd., Angel Investor)",
  "Rohit Tandon (Head of Investments (Equities), Reliance Nippon Life Insurance)",
  "Bhagwat Kharat (Deputy General Manager- Human Resources, Unichem Laboratories Ltd.)",
  "Shipra Kumar (Owner and Lead Consultant, Artezian HR Consulting)",
];

const topics = [
  "The Entrepreneur's Mind: From Vision to Venture",
  "Pharmaceutical Marketing Unveiled: Beyond Familiar Territory",
  "HR Think Tank: Diving into Strategy Brilliance",
  "Capital Narratives: Understanding the Science of Finances",
  "Trends Shaping the Future: Next-Gen Pharma",
];

const Glimpse = () => {
  const [page, setPage] = useState(0);
  const pageSize = 9;
  const totalPages = Math.ceil(images.length / pageSize);
  const currentImages = images.slice(page * pageSize, page * pageSize + pageSize);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handleZoom = (img) => {
    window.open(img, "_blank");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="glimpse">
      {/* Logo and Go Back Button at the top */}
      <div className="topNav">
        <div className="logoContainer">
          <img src={logo} alt="Samprabhav Logo" className="logo" />
        </div>

        <ul className="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><Link to="/glimpse">Glimpses</Link></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="backBtnContainer">
          <button onClick={handleGoBack} className="backButton">
            <FaArrowLeft size={24} className="arrowIcon" />
            <span className="backText">Go Back</span>
          </button>
        </div>
      </div>

      {/* Background decorative images */}
      <div className="bg-decorations">
        <img src={circleBlue} alt="decorative" className="bg-decor decor-1" />
        <img src={newCircle} alt="decorative" className="bg-decor decor-2" />
        <img src={iconDots} alt="decorative" className="bg-decor decor-3" />
        <img src={shape2} alt="decorative" className="bg-decor decor-4" />
      </div>

      <div className="glimpse-container">
        {/* Extra decorative image */}
        {/* <img src={abShape2} alt="extra decorative" className="bg-extra" /> */}

        {/* Main Heading and Description */}
        <h1 className="glimpse-heading">Samprabhav 2024</h1>
        <p className="glimpse-description">
          As a part of our annual legacy, the Department of Pharmaceutical
          Management, NIPER S.A.S. Nagar (Mohali) organizes "SAMPRABHAV" – a
          National Pharma Conclave. The conclave acts as a platform for eminent
          speakers and the greatest minds across the Indian Pharmaceutical
          Industry. It provides a dais for students to interact and discuss
          various issues prevailing in the current scenario, while also
          establishing and strengthening connections among its distinguished
          guests and participants.
        </p>

        {/* Chief Guest Section */}
        <h2 className="section-title">Chief Guest & Guest of Honor</h2>
        <ul className="list">
          {chiefGuests.map((guest, idx) => (
            <li key={idx}>
              <FaArrowRight className="list-icon" /> {guest}
            </li>
          ))}
        </ul>

        {/* Guest Speakers Section */}
        <h2 className="section-title">Guest Speakers of Samprabhav 2024</h2>
        <ul className="list">
          {guestSpeakers.map((speaker, idx) => (
            <li key={idx}>
              <FaArrowRight className="list-icon" /> {speaker}
            </li>
          ))}
        </ul>

        {/* Former Discourse Topics Section */}
        <h2 className="section-title">Topics of Former Discourse</h2>
        <ul className="list">
          {topics.map((topic, idx) => (
            <li key={idx}>
              <FaArrowRight className="list-icon" /> {topic}
            </li>
          ))}
        </ul>

        {/* Image Gallery with Pagination */}
        <h2 className="section-title">A Glimpse</h2>
        <div className="glimpse-grid">
          {currentImages.map((img, index) => (
            <div key={index} className="glimpse-item">
              <img src={img} alt={`Glimpse ${page * pageSize + index + 1}`} />
              <div className="overlay">
                <button
                  className="zoom-button"
                  onClick={() => handleZoom(img)}
                  title="View Fullscreen"
                >
                  <FaSearchPlus size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={handlePrev} disabled={page === 0}>
            Previous
          </button>
          <span>
            Page {page + 1} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={page === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
