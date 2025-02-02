import { useState } from "react";
import { motion } from "framer-motion";
import { UserCheck, Award, GraduationCap, CalendarCheck, ChevronDown, ChevronUp } from "lucide-react";
import "../styles/FAQ.css";
import { FaArrowRight, FaSearchPlus, FaArrowLeft } from 'react-icons/fa';
import logo from '../assests/logo.png';


// Import decorative background images
import circleBlue from '../assests/icons/icon-circle-1.png';
import newCircle from '../assests/icons/newCircle.png';
import iconDots from '../assests/icons/icon-dots.png';
import shape2 from '../assests/icons/shape-2.png';
import abShape2 from '../assests/icons/ab-shape-2.png';

const faqs = [
  { 
    question: "Why should I register for the event?", 
    answer: "Samprabhav is a great event to get yourself connected with industry experts and increase your networking potential. Furthermore, you’ll get an in-depth knowledge about the recent on-goings of the Pharma industry.", 
    icon: <UserCheck size={20} className="faq-icon" />
  },
  { 
    question: "Will I get any certificate for attending the event?", 
    answer: "Yes, the registered attendees will be awarded with the certificates.", 
    icon: <Award size={20} className="faq-icon" /> 
  },
  { 
    question: "What are the educational eligibility criteria for the event?", 
    answer: "Students pursuing M.B.A. (Core / Pharm. Management) or B. Pharm. or Pharm.D are eligible for the event.", 
    icon: <GraduationCap size={20} className="faq-icon" />
  },
  { 
    question: "Are on-spot registrations available?", 
    answer: "Yes, it is available. But try to register early to avoid last minute validations.", 
    icon: <CalendarCheck size={20} className="faq-icon" />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="faq-container">
       {/* Logo and Go Back Button at the top */}
            <div className="top-nav">
              <img src={circleBlue} alt="decorative" className="bg-decor decor-1" />
              <img src={logo} alt="Samprabhav Logo" className="logo" />
              <button onClick={handleGoBack} className="back-button">
                <FaArrowLeft size={24} />
                <span className="back-text">Go Back</span>
              </button>
            </div>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-description">These are the most commonly asked questions about the event.</p>
      <p className="faq-description-2">Can't tind what you're looking tor? <a href="#">Chat to our friendl team!</a></p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-question-content">
                <div className="faq-icon-wrapper">{faq.icon}</div>
                {faq.question}
              </div>
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            <motion.div 
              className="faq-answer-wrapper"
              initial={{ height: 0, opacity: 0 }} 
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} 
              transition={{ duration: 0.3, ease: "easeInOut" }} 
            >
              <p className="faq-answer">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
