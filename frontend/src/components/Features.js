import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "../styles/Features.css";

// Importing images
import featurePattern from "../assests/features-pattern.jpg";
import conferenceIcon from "../assests/Features/conference.png";
import studentIcon from "../assests/Features/student.png";
import universityIcon from "../assests/Features/university.png";
import dealIcon from "../assests/Features/deal.png";
import topicIcon from "../assests/Features/topic.png";

const featuresData = [
  { title: "Speakers", count: 12, icon: conferenceIcon },
  { title: "Students", count: 800, icon: studentIcon },
  { title: "Colleges", count: 40, icon: universityIcon },
  { title: "Sponsors", count: 11, icon: dealIcon },
  { title: "Topics", count: 5, icon: topicIcon },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <section className="features-features-section" ref={ref}>
      <img className="features-feature-pattern" src={featurePattern} alt="" />
      <h2 className="features-features-title">
        Our <strong>Features</strong>
      </h2>
      <div className="features-features-container">
        {featuresData.map((feature, index) => (
          <div className="features-feature-card" key={index}>
            <div className="features-feature-icon">
              <img src={feature.icon} alt={feature.title + " Icon"} />
            </div>
            <h3 className="features-feature-count">
              {isVisible ? <CountUp start={0} end={feature.count} duration={2} /> : 0}
            </h3>
            <p className="features-feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
