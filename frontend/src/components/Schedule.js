import React, { useState, useEffect } from "react";
import styles from "../styles/Schedule.module.css"; // Import CSS Module

const scheduleData = [
  {
    bucket: "Fueling Pharma Success: The Power of Digital and Global Marketing",
    speakers: [
      { name: "Hirak Bose", designation: "Senior VP, Sales & Marketing, Lupin Ltd." },
      { name: "Manish Bajaj", designation: "Cluster Head, Dr. Reddy’s Laboratories" },
    ],
  },
  {
    bucket: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
    speakers: [
      { name: "Gopal Rao", designation: "Associate VP, Business Development, Biocon Biologics" },
      { name: "Ajayy Kumar Shukla", designation: "Sales Manager, Medtronic" },
    ],
  },
  {
    bucket: "Re-envisioning Boundaries: Transformative Strategies for Business and Product Excellence",
    speakers: [],
  },
  {
    bucket: "Redefining Talent Paradigms: Crafting Future Workforce",
    speakers: [
      { name: "Megha Soni", designation: "Associate Director - People Success, Solutionec" },
      { name: "Uday Kanth", designation: "Senior Manager - HR, Trinity Life Sciences" },
    ],
  },
  {
    bucket: "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
    speakers: [
      { name: "Virendra Kumar", designation: "Founder & CEO, AdametNext" },
      { name: "Ritu Rana", designation: "Senior Manager - Forecasting CoE, Axtria" },
      { name: "Suresh Pemmaraju", designation: "Associate VP, Molekule Consulting" },
    ],
  },
];

const Schedule = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.scheduleSection}>
      {/* Animated Heading */}
      <h2 className={`${styles.scheduleHeading} ${animateHeading ? styles.animate : ""}`}>
        Event Schedule
      </h2>

      {/* Timeline */}
      <div className={styles.timeline}>
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className={`${styles.scheduleItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div
              className={`${styles.content} ${openIndex === index ? styles.active : ""}`}
              onClick={() => toggleDropdown(index)}
            >
              <h3 className={styles.bucketTitle}>{item.bucket}</h3>
              <span className={styles.dropdownIcon}>
                {openIndex === index ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                )}
              </span>
            </div>

            {/* Dropdown Content */}
            <div
              className={`${styles.dropdown} ${openIndex === index ? styles.active : ""}`}
            >
              {item.speakers.length > 0 ? (
                <ul className={styles.speakerList}>
                  {item.speakers.map((speaker, i) => (
                    <li key={i} className={styles.speakerItem}>
                      {speaker.name} - {speaker.designation}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.noSpeakers}>No specific speakers listed</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;