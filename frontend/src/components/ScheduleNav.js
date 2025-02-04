import React, { useState } from "react";
import styles from "../styles/ScheduleNav.module.css";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const scheduleData = [
    {
      day: "Day 1",
      buckets: [
        {
          title:
            "Fueling Pharma Success: The Power of Digital and Global Marketing",
          speakers: [
            "Hirak Bose - Senior Vice President, Sales and Marketing, Lupin Ltd.",
            "Manish Bajaj- Cluster Head at Dr Reddy’s Laboratories",
          ],
        },
        {
          title: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
          speakers: [
            "Biologics - Mr. Gopal Rao, Associate Vice President Business Development and Licensing, Biocon Biologics",
            "Medical devices - Ajayy Kumar Shukla- Sales Manager (Medtronic)",
          ],
        },
        {
          title:
            "Re-envisioning boundaries: Transformative Strategies for Business and Product Excellence",
          speakers: [],
        },
      ],
    },
    {
      day: "Day 2",
      buckets: [
        {
          title: "Redefining Talent Paradigms: Crafting Future Workforce",
          speakers: [
            "Megha Soni - Associate Director-People Success, Solutionec",
            "Uday Kanth - Senior Manager- HR, Trinity Life Sciences",
          ],
        },
        {
          title:
            "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
          speakers: [
            "CI - Mr. Virendra Kumar (Founder & CEO, AdametNext)",
            "Forecasting - Ms. Ritu Rana (Senior Manager-Forecasting CoE, Axtria)",
            "Strategic Consulting - Mr. Suresh Pemmaraju (Associate Vice President, Molekule Consulting)",
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.scheduleContainer}>
      <h2 className={styles.heading}>Event Schedule</h2>

      {/* Day Selection Buttons */}
      <div className={styles.daySelector}>
        {scheduleData.map((dayData, index) => (
          <button
            key={index}
            className={`${styles.dayButton} ${
              selectedDay === dayData.day ? styles.active : ""
            }`}
            onClick={() => setSelectedDay(dayData.day)}
          >
            {dayData.day}
          </button>
        ))}
      </div>

      {/* Roadmap Layout */}
      <div className={styles.roadmapContainer}>
        <div className={styles.roadmapLine}></div>

        {scheduleData
          .filter((dayData) => dayData.day === selectedDay)
          .map((dayData) => (
            <div key={dayData.day} className={styles.daySection}>
              {dayData.buckets.map((bucket, index) => (
                <motion.div
                  key={index}
                  className={`${styles.bucket} ${
                    index % 2 === 0 ? styles.leftBucket : styles.rightBucket
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <div
                    className={styles.bucketHeader}
                    onClick={() => toggleDropdown(`${dayData.day}-${index}`)}
                  >
                    <h4>{bucket.title}</h4>
                    <FaChevronDown
                      className={`${styles.dropdownIcon} ${
                        openDropdown === `${dayData.day}-${index}`
                          ? styles.open
                          : ""
                      }`}
                    />
                  </div>
                  {openDropdown === `${dayData.day}-${index}` && (
                    <motion.div
                      className={styles.dropdownContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <ul>
                        {bucket.speakers.map((speaker, idx) => (
                          <li key={idx}>{speaker}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Schedule;
