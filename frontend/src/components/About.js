import React from 'react';
import aboutimg from "../assests/about.jpg"; // Ensure the path is correct
import styles from '../styles/About.module.css'; // Import CSS Module

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.autoContainer}>
        <div className={styles.row}>
          {/* Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.innerColumn}>
              <div className={styles.secTitle}>
                <span className={styles.title}>About Samprabhav</span>
                <h2>Welcome to the Samprabhav</h2>
                <div className={styles.text}>
                  Samprabhav – Union of Magnates, is a splendid gathering where industry experts concentrate with budding minds, a fusion that possesses the capability to ignite a small spark capable of spreading into a transformative influence within the pharmaceutical sector. The event's five focal points thoughtfully address all industry dimensions, culminating in a well-rounded and enriching experience. Moreover, after each session, an open Q&A allows every student to seize equal opportunities, gaining deeper insights into industry operations. Thus, the mega event is a testament to student management, exceptional speak sessions, and student brainstorming, making it an all-encompassing program. In totality, it's a mega event that adds up to a great quantum of glory for the Department of Pharmaceutical Management, NIPER S.A.S. Nagar (Mohali).
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageBox}>
              <figure className={styles.image}>
                <img src={aboutimg} alt="About Samprabhav" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;