import React from 'react';
import aboutimg from "../assests/about.jpg"; // Ensure the path is correct
import styles from '../styles/AboutHome.module.css'; // Import CSS Module

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.autoContainer}>
        <div className={styles.row}>
          {/* Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.innerColumn}>
              <div className={styles.secTitle}>
                <span className={styles.title}>About Event</span>
                <h2>Welcome to the Samprabhav</h2>
                <div className={styles.text}>
                  Samprabhav – Union of Magnates, is a grand event where industry experts converge with aspiring minds, creating a platform to ignite ideas that can drive transformative changes in the pharmaceutical sector. With five focal points, the event thoughtfully covers diverse industry dimensions, providing a well-rounded experience. Each session concludes with an open Q&A, ensuring equal opportunities for students to gain deeper insights into industry operations. This mega event stands as a testament to student management, impactful speaker sessions, and innovative brainstorming, culminating in a remarkable achievement for the Department of Pharmaceutical Management, NIPER S.A.S. Nagar (Mohali).
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageBox}>
              <figure className={styles.image}>
                <img src={aboutimg} alt="About Event" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;