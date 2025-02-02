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
import testimonialIcon from "../assests/Features/testimonial.png";

const featuresData = [
  { title: "Speakers", count: 12, icon: conferenceIcon },
  { title: "Students", count: 800, icon: studentIcon, hasPlus: true },
  { title: "Colleges", count: 40, icon: universityIcon, hasPlus: true },
  { title: "Sponsors", count: 11, icon: dealIcon, hasPlus: true },
  { title: "Topics", count: 5, icon: topicIcon, hasPlus: true },
  {
    title: "Testimonials",
    count: 5,
    icon: testimonialIcon,
  },
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
        Discover <span className="highlight-text">Our Amazing Features</span>
      </h2>
      <p className="features-description">
        Explore the core features that make our event truly unique. These are
        designed to empower you, enhance your experience, and make a lasting
        impact.
      </p>
      <div className="features-features-container">
        {featuresData.map((feature, index) => (
          <div className={`features-feature-card ${isVisible ? "is-visible" : ""}`} key={index}>
            <div className="features-feature-icon">
              <img src={feature.icon} alt={feature.title + " Icon"} />
            </div>
            <h3 className="features-feature-count">
              {isVisible ? <CountUp start={0} end={feature.count} duration={2} /> : 0}
              {feature.hasPlus && "+"}
            </h3>
            <p className="features-feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
