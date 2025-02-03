import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom"; // Import Link
import styles from "../styles/Features.module.css";

// Importing images
import featurePattern from "../assests/features-pattern.jpg";
import conferenceIcon from "../assests/Features/conference.png";
import studentIcon from "../assests/Features/student.png";
import universityIcon from "../assests/Features/university.png";
import dealIcon from "../assests/Features/deal.png";

const featuresData = [
  { title: "Speakers", count: 12, icon: conferenceIcon, hasPlus: true, link: "#speakers" },
  { title: "Students", count: 800, icon: studentIcon, hasPlus: true },
  { title: "Colleges", count: 40, icon: universityIcon, hasPlus: true },
  { title: "Sponsors", count: 11, icon: dealIcon, hasPlus: true, link: "#sponsors" },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once visible
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" } // Adjust rootMargin for better triggering
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className={styles.featuresSection} ref={ref}>
      <img className={styles.featurePattern} src={featurePattern} alt="" />
      <h2 className={styles.featuresTitle}>
        Discover <span className={styles.highlightText}>Our Amazing Features</span>
      </h2>
      {/* <p className={styles.description}>
        Explore the core features that make our event truly unique. These are
        designed to empower you, enhance your experience, and make a lasting
        impact.
      </p> */}
      <div className={styles.featuresContainer}>
        {featuresData.map((feature, index) => (
          <div className={`${styles.featureCard} ${isVisible ? styles.isVisible : ""}`} key={index}>
            <div className={styles.featureIcon}>
              <img src={feature.icon} alt={`${feature.title} Icon`} />
            </div>
            <h3 className={styles.featureCount}>
              {isVisible ? (
                <CountUp start={0} end={feature.count} duration={2} />
              ) : (
                feature.count // Fallback to static count if not visible
              )}
              {feature.hasPlus && "+"}
            </h3>
            <p className={styles.featureTitle}>
              {feature.link ? (
                <Link to={feature.link} className={styles.featureLink}>
                  {feature.title}
                </Link>
              ) : (
                feature.title
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
