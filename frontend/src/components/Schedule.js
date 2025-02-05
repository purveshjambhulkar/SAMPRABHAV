import React, { useState, useEffect } from "react";
import styles from "../styles/Schedule.module.css"; // Import CSS Module

const scheduleData = [
  {
    bucket: "Fueling Pharma Success: The Power of Digital and Global Marketing",
    date: "22 February",
    speakers: [
      { name: "Hirak Bose", designation: "Senior Vice President, Sales and Marketing, Lupin Ltd." },
      { name: "Manish Bajaj", designation: "Cluster Head at Dr. Reddy’s Laboratories" },
      { name: "Tavinder Jit Singh Vasudeva", designation: "Cluster Head at Dr. Reddy’s Laboratories" },
    ],
  },
  {
    bucket: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
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
    bucket: "Re-envisioning Boundaries: Transformative Strategies for Business and Product Excellence",
    date: "22 February",
    speakers: [],
  },
  {
    bucket: "Redefining Talent Paradigms: Crafting Future Workforce",
    date: "23 February",
    speakers: [
      { name: "Megha Soni", designation: "Associate Director, People Success, Solutionec" },
      { name: "Uday Kanth", designation: "Senior Manager, HR, Trinity Life Sciences" },
    ],
  },
  {
    bucket: "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
    date: "23 February",
    speakers: [
      { name: "Virendra Kumar", designation: "Founder & CEO, AdametNext" },
      { name: "Ritu Rana", designation: "Senior Manager, Forecasting CoE, Axtria" },
      { name: "Suresh Pemmaraju", designation: "Associate Vice President, Molekule Consulting" },
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
            className={`${styles.scheduleItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div
              className={`${styles.content} ${openIndex === index ? styles.active : ""}`}
              onClick={() => toggleDropdown(index)}
            >
              <div>
                <h3 className={styles.bucketTitle}>{item.bucket}</h3>
                <p className={styles.bucketDate}>{item.date}</p>
              </div>
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
