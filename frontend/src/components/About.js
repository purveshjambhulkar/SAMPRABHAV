import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import aboutimg from "../assests/about.jpg";
import logo from "../assests/logo.png";
import styles from "../styles/About.module.css";

const About = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className={styles.aboutSection}>
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

      {/* Main About Content */}
      <div className={styles.autoContainer}>
        <div className={styles.row}>
          <div className={styles.contentColumn}>
            <div className={styles.innerColumn}>
              <div className={styles.secTitle}>
                <span className={styles.title}>About Event</span>
                <h2>Welcome to the Samprabhav</h2>
                <div className={styles.text}>
                  Samprabhav – Union of Magnates, is a grand event where
                  industry experts converge with aspiring minds, creating a
                  platform to ignite ideas that can drive transformative changes
                  in the pharmaceutical sector. With five focal points, the
                  event thoughtfully covers diverse industry dimensions,
                  providing a well-rounded experience. Each session concludes
                  with an open Q&A, ensuring equal opportunities for students to
                  gain deeper insights into industry operations. This mega event
                  stands as a testament to student management, impactful speaker
                  sessions, and innovative brainstorming, culminating in a
                  remarkable achievement for the Department of Pharmaceutical
                  Management, NIPER S.A.S. Nagar (Mohali).
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageBox}>
              <figure className={styles.image}>
                <img src={aboutimg} alt="About Event" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <div className={styles.newSections}>
        {/* Why Should You Attend? Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>WHY SHOULD YOU ATTEND?</h3>
          <h4 className={styles.subHeading}>7 S of Samprabhav</h4>
          <ul className={styles.bulletPoints}>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>STEP IN:</strong> Immerse yourself in a transformative
              experience that sparks fresh ideas and opens new doors.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SEARCH:</strong> Discover innovative solutions and
              emerging trends redefining the industry landscape.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SYNC UP:</strong> Collaborate with industry experts and
              peers, fostering connections that matter.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SEE BEYOND:</strong> Draw inspiration from leaders who
              challenge the status quo and envision a brighter future.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SURPASS:</strong> Break barriers, push limits, and unleash
              your full potential for personal and professional growth.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SHARPEN:</strong> Refine your skills to align with dynamic
              industry demands and set yourself apart.
            </li>
            <li>
              <FaCheckCircle className={styles.bulletIcon} />
              <strong>SHOWCASE:</strong> Leave with invaluable takeaways –
              insights, experiences, and achievements that add value to your CV
              and create lasting impressions.
            </li>
          </ul>
        </div>

        {/* Who Should Attend Samprabhav? Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>WHO SHOULD ATTEND SAMPRABHAV?</h3>
          <ul className={styles.bulletPoints}>
            <li>
              <FaUserGraduate className={styles.bulletIcon} />
              <strong>PHARMA STUDENTS:</strong> Students across all pharmacy
              specialties keen to understand the diverse facets of the
              pharmaceutical industry.
            </li>
            <li>
              <FaUserGraduate className={styles.bulletIcon} />
              <strong>MANAGEMENT STUDENTS:</strong> Business school students
              aiming to deepen their understanding of the pharmaceutical sector
              and broaden their industry perspective.
            </li>
            <li>
              <FaChalkboardTeacher className={styles.bulletIcon} />
              <strong>MENTORS:</strong> Educators and professors aiming to stay
              ahead of industry trends and enrich their students' practical
              knowledge.
            </li>
            <li>
              <FaBriefcase className={styles.bulletIcon} />
              <strong>PROFESSIONALS:</strong> Experts seeking to network,
              collaborate, and exchange wisdom with other influential figures in
              the field.
            </li>
            <li>
              <FaUserGraduate className={styles.bulletIcon} />
              <strong>ASPIRANTS:</strong> Aspiring individuals determined to
              shape their career in the pharmaceutical sector and learn from the
              very best.
            </li>
            <li>
              <FaBriefcase className={styles.bulletIcon} />
              <strong>RECRUITERS:</strong> Talent scouts in search of fresh,
              creative minds eager to bring new energy and ideas into the
              industry.
            </li>
          </ul>
        </div>

        {/* About DOPM Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Host of Samprabhav 2025</h3>
          <h4 className={styles.subHeading}>
            Department of Pharmaceutical Management (DOPM), NIPER Mohali
          </h4>
          <div className={styles.text}>
            <p>
              The Department of Pharmaceutical Management, NIPER S.A.S. Nagar
              (Mohali), is dedicated to shaping future leaders in pharmaceutical
              management. With a vision that transcends traditional learning,
              the department blends advanced technology with progressive
              management practices, fostering innovation and excellence. Its
              meticulously designed curriculum integrates theoretical knowledge
              with practical applications, preparing students for the dynamic
              pharmaceutical industry. Selected through a rigorous process,
              students from diverse backgrounds undergo intensive training that
              combines coursework and extracurricular activities, shaping them
              into skilled professionals. Committed to continuous learning, the
              department aims to create industry leaders driving global
              healthcare advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
