// Testimonials.jsx
import React from "react";
import { FaArrowLeft } from 'react-icons/fa';
import "../styles/Testimonials.css";
import logo from "../assests/black-logo.png";
import bgimg from "../assests/icons/ab-shape-4.png"

const testimonials = [
  {
    name: "Mr. SANJEEV JUNEJA",
    position: "Founder, Divisa Herbals Pvt. Ltd. & SBS Group of Companies",
    text: "NIPER organised Samprabhav 2024, where I had the privilege of delivering valuable insights to students. It was a remarkable opportunity to encourage and empower the students, urging them to embrace their unique paths with confidence and enthusiasm. I am hopeful that these students will make significant contributions to society as they embark on their respective journeys.",
    image: require("../assests/Testimonials/1.png"),  // Import image dynamically
  },
  {
    name: "Mr. HARMEET LAMBA",
    position: "Founder & CEO, Harmeet Lamba Consultancy & Advisory Services",
    text: "I've attended several such events, but Samprabhav stands out as possibly the best, especially from a Pharma MBA perspective. The diversity of sessions and the caliber of speakers were remarkable. I thoroughly enjoyed my session, but after two days at this event, I leave not just as a speaker but as an enriched student. It was a brilliant experience, and I truly value the opportunity to be part of it. Thank you for having me and I wish the best to the students.",
    image: require("../assests/Testimonials/2.png"),
  },
  {
    name: "Mr. VIKRAM A. MUNSHI",
    position: "Founder of WhiteSpace Consulting and Capability Building",
    text: "It was a pleasure to be invited to Samprabhav, the National Pharma Conclave, organized by the Department of Pharmaceutical Management, NIPER, in February 2024. The event on entrepreneurship, 'The Entrepreneur's Mind: From Vision to Venture,' was a shining example of flawless coordination. Samprabhav excelled in both content and overall experience. It was an honor to be part of this event, and I wish NIPER and the students continued success.",
    image: require("../assests/Testimonials/3.png"),
  },
  {
    name: "NISHU SHARMA",
    position: "ASSOCIATE DIRECTOR, ADAMETNEXT",
    text: "I had the privilege of attending Samphrabhav 2024, and it was an unforgettable experience. The sessions offered deep insights into pharmaceutical advancements, and the speakers were truly inspiring. The organizing team did an exceptional job, ensuring smooth execution from workshops to panel discussions. It was a celebration of innovation and excellence in the pharmaceutical field. I'm already looking forward to next year's event!",
    image: require("../assests/Testimonials/4.png"), 
  },
  {
    name: "Mr. Byom Nath Choubey",
    position: "DPSRU, Delhi",
    text: "Representing DPSRU at Samprabhav 2024 was an incredible experience. Exceptional hospitality, knowledgeable speakers, and valuable insights into the pharmaceutical market made the event unforgettable. It was a privilege to connect with like-minded individuals and industry experts.",
    image: null, // Keep null as is
  },
  {
    name: "Ms. Nishika Kapoor",
    position: "Panjab University, Chandigarh",
    text: "Samprabhav 2024 was inspiring, offering dynamic discussions on entrepreneurship, marketing, and future pharma trends. The event fostered learning, networking, and innovation, connecting students and experts in a platform that encouraged forward-thinking and valuable industry insights.",
    image: null,
  },
  {
    name: "Ms. Vidhi Pandit",
    position: "LMCOP, Ahmedabad",
    text: "NIPER Mohali demonstrated exceptional management during Samprabhav 2024, organizing an inspiring event seamlessly. Participants benefited from collaborative efforts, knowledge-sharing sessions, and valuable insights, showcasing professionalism and excellence.",
    image: null,
  },
  {
    name: "Ms. Harwinder Kaur Walia ",
    position: "Chitkara University, Rajpurar",
    text: "Samprabhav 2024 at NIPER Mohali blended academic excellence, innovation, and collaboration. Engaging sessions broadened my perspectives. Thanks to the team for meticulous planning and warm hospitality, creating an enriching experience.",
    image: null,
  },
];


const backgroundColors = ["#FCEBB8", "#A6E0DA", "#7D8E8F"];

const Testimonial = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {/* Header Section */}
      <div className="top-nav">
        <img src={bgimg} alt="decorative" className="bg-decor decor-1" />
        <img src={logo} alt="Samprabhav Logo" className="logo" />
        <button onClick={handleGoBack} className="back-button">
          <FaArrowLeft size={24} />
          <span className="back-text">Go Back</span>
        </button>
      </div>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-title">What people say about us</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => {
            const bgColor = backgroundColors[index % backgroundColors.length];

            return (
              <div
                className={`testimonial-card ${index === 0 ? "first-card" : ""}`}
                key={index}
              >
                <div className="container-testimonial">
                  <div className="left">
                    <div className="testimonial-info">
                      <div
                        className="testimonial-avatar"
                        style={{ backgroundColor: bgColor }}
                      >
                        {testimonial.image ? (
                          <img src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <span>{testimonial.name[0]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-position">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Testimonial;