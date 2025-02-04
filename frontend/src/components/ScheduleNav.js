import React, { useState } from 'react';
import styles from '../styles/ScheduleNav.module.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assests/logo.png";
const ScheduleRoadmap = () => {
  const [activeDay, setActiveDay] = useState('22 February');
  
  const scheduleData = [
    // Day 1 - 22 February
    {
      bucket: "9:30 - 11:00 AM INAUGURAL EVENT",
      date: "22 February",
      speakers: [
        { name: "Dr. Subba Rao Chaganti", designation: "Executive Coach, Mentor, Author" },
        { name: "Guest of Honor", designation: "To be announced" }
      ],
    },
    {
      bucket: "11:00 - 11:30 AM Tea Break",
      date: "22 February",
      speakers: [],
    },
    {
      bucket: "11:30 - 1:00PM BUCKET 1: Fueling Pharma Success: The Power of Digital and Global Marketing",
      date: "22 February",
      speakers: [
        { name: "Hirak Bose", designation: "Senior Vice President, Sales and Marketing, Lupin Ltd." },
        { name: "Manish Bajaj", designation: "Cluster Head at Dr. Reddy's Laboratories" },
      ],
    },
    {
      bucket: "1:00 - 2:00 PM Lunch",
      date: "22 February",
      speakers: [],
    },
    {
      bucket: "2:00 - 3:30 PM BUCKET 2: Pioneering Trends: Reshaping the Pharmaceutical Landscape",
      date: "22 February",
      speakers: [
        {
          name: "Gopal Rao",
          designation: "Associate Vice President, Business Development and Licensing, Biocon Biologics",
        },
        { name: "Ajayy Kumar Shukla", designation: "Sales Manager, Medtronic" },
      ],
    },
    {
      bucket: "3:30 – 5:00 PM BUCKET 3: Re-envisioning Boundaries: Transformative Strategies for Business and Product Excellence",
      date: "22 February",
      speakers: [],
    },
    // Day 2 - 23 February
    {
      bucket: "9:30 – 11:00 AM INCEPTION CEREMONY",
      date: "23 February",
      speakers: [
        { name: "Dr. Vinay Lohariwala", designation: "Managing Director at Innova Captab Ltd" }
      ],
    },
    {
      bucket: "11:00 - 11:30 AM Tea Break",
      date: "23 February",
      speakers: [],
    },
    {
      bucket: "11:30 - 1:00 PM BUCKET 4: Redefining Talent Paradigms: Crafting Future Workforce",
      date: "23 February",
      speakers: [
        { name: "Megha Soni", designation: "Associate Director, People Success, Solutionec" },
        { name: "Uday Kanth", designation: "Senior Manager, HR, Trinity Life Sciences" },
      ],
    },
    {
      bucket: "1:00 - 2:00 PM Lunch",
      date: "23 February",
      speakers: [],
    },
    {
      bucket: "2:00 - 3:30 PM BUCKET 5: Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
      date: "23 February",
      speakers: [
        { name: "Virendra Kumar", designation: "Founder & CEO, AdametNext" },
        { name: "Ritu Rana", designation: "Senior Manager, Forecasting CoE, Axtria" },
        { name: "Suresh Pemmaraju", designation: "Associate Vice President, Molekule Consulting" },
      ],
    },
    {
      bucket: "3:30 – 5:00 PM Felicitation of Sponsors & Closing Ceremony",
      date: "23 February",
      speakers: [],
    },
  ];

  const filteredSchedule = scheduleData.filter(item => item.date === activeDay);

  const parseEventInfo = (bucket) => {
    const splitIndex = bucket.indexOf('M') + 1; // Find the position of 'M' in AM/PM
    const timeStr = bucket.substring(0, splitIndex).trim(); // Extract the time
    const title = bucket.substring(splitIndex).trim(); // Extract the event title
    return { time: timeStr, title };
  };
  
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/speakers">Speakers</a></li>
          <li><a href="/sponsors">Sponsors</a></li>
          <li><Link to="/glimpse">Glimpses</Link></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div className={styles.backBtnContainer}>
          <button onClick={handleGoBack} className={styles.backButton}>
            <FaArrowLeft size={24} className={styles.arrowIcon} />
            <span className={styles.backText}>Go Back</span>
          </button>
        </div>
      </div>


     <div className={styles.scheduleContainer}>
        <div className={styles.dayButtons}>
          <button
            className={`${styles.dayButton} ${activeDay === '22 February' ? styles.active : styles.inactive}`}
            onClick={() => setActiveDay('22 February')}
          >
            Day 1
          </button>
          <button
            className={`${styles.dayButton} ${activeDay === '23 February' ? styles.active : styles.inactive}`}
            onClick={() => setActiveDay('23 February')}
          >
            Day 2
          </button>
        </div>

        <div className={styles.timeline}>
    {filteredSchedule.map((event, index) => {
      const { time, title } = parseEventInfo(event.bucket); // Fix destructuring
      return (
        <div key={index} className={styles.timelineEvent}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineTime}>{time}</div>
            <div className={styles.timelineActivity}>{title}</div> {/* Fix activity to title */}
            {event.speakers.length > 0 && (
              <div className={styles.speakerList}>
                {event.speakers.map((speaker, idx) => (
                  <div key={`${index}-${idx}`} className={styles.speaker}> {/* Fix missing key */}
                    <div className={styles.speakerName}>{speaker.name}</div>
                    <div className={styles.speakerDesignation}>{speaker.designation}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.timelineDot}></div>
        </div>
      );
    })}
  </div>
      </div>
    </div>
  );
};

export default ScheduleRoadmap;