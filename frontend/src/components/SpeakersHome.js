import React from 'react';
import styles from '../styles/SpeakersHome.module.css';

// Import speaker images from "../assests/Speakers/"
import speaker1 from "../assests/Speakers/1.png";
import speaker2 from "../assests/Speakers/2.png";
import speaker3 from "../assests/Speakers/3.png";
import speaker4 from "../assests/Speakers/4.png";
import speaker5 from "../assests/Speakers/5.png";
import speaker6 from "../assests/Speakers/6.png";
import speaker7 from "../assests/Speakers/7.png";
import speaker8 from "../assests/Speakers/8.png";
import speaker9 from "../assests/Speakers/9.png";
import speaker10 from "../assests/Speakers/10.png";
import speaker11 from "../assests/Speakers/11.png";
import speaker12 from "../assests/Speakers/12.png";

const speakerImages = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6, speaker7, speaker8, speaker9,speaker10, speaker11, speaker12];

const buckets = [
  {
    title: "Strategic Transformation: Integrating Innovation into Marketing & Commercialization",
    speakers: [
      { id: 1, name: "Mr. Harit Mohan", designation: "Founder & CEO, Signicent, and Global Co-Chair TiE Univ. (TiE U)", linkedin: "https://www.linkedin.com/in/mohanharit" },
      { id: 2, name: "Dr. Ankit Jain", designation: "Senior Segment Manager, Applied Genomics (Illumina)", linkedin: "https://www.linkedin.com/in/ankit-jain-34466b109" },
      { id: 10, name: "Tavinder Jit Singh Vasudeva", designation: "President & Chief Business Officer, Microlabs", linkedin: "https://www.linkedin.com/in/tavinder-jit-singh-vasudeva-86b5625" }
    ]
  },
  {
    title: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
    speakers: [
      { id: 3, name: "Mr. Gopal Rao", designation: "Associate Vice President, Business Development and Licensing, Biocon Biologics", linkedin: "https://www.linkedin.com/in/gopal-rao-68936412", category: "Biologics" },
      { id: 4, name: "Ajayy Kumar Shukla", designation: "Sales Manager (Medtronic)", linkedin: "https://www.linkedin.com/in/ajayy-kumar-shuklaa-090b501b", category: "Medical devices" }
    ]
  },
  {
    title: "The Innovation Shield: Protecting Ideas, Powering Ventures",
    speakers: [
      { id: 11, name: "Ms. Komal Sharma Talwar", designation: "Founder of TT Consultants, Founder and Director of XL Scout", linkedin: "https://www.linkedin.com/in/komalsharmatalwar", category: "Biologics" },
      { id: 12, name: "Mr. Satish Kumar Arora", designation: "President at TiE Chandigarh, Co-Founder of AppSmartz & GameSee Pvt. Ltd., Angel Investor", linkedin: "https://www.linkedin.com/in/skarora27", category: "Medical devices" }
    ]
  },
  {
    title: "Redefining Talent Paradigms: Crafting Future Workforce",
    speakers: [
      { id: 5, name: "Megha Soni", designation: "Associate Director-People Success, Solutionec", linkedin: "https://www.linkedin.com/in/megha-soni" },
      { id: 6, name: "Uday Kanth", designation: "Senior Manager-HR, Trinity Life Sciences", linkedin: "https://www.linkedin.com/in/udaykanthg" }
    ]
  },
  {
    title: "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
    speakers: [
      { id: 7, name: "Mr. Virendra Kumar", designation: "Founder & CEO, AdametNext", linkedin: "https://www.linkedin.com/in/virendrakumar1009", category: "CI" },
      { id: 8, name: "Ms. Ritu Rana", designation: "Senior Manager-Forecasting CoE, Axtria", linkedin: "https://www.linkedin.com/in/ritu-rana-71a52641", category: "Forecasting" },
      { id: 9, name: "Mr. Suresh Pemmaraju", designation: "Associate Vice President, Molekule Consulting", linkedin: "https://www.linkedin.com/in/suresh-pemmaraju-a812929", category: "Strategic Consulting" }
    ]
  }
];

const SpeakersHome = () => {
  return (
    <div className={styles.speakersSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={`${styles.meetaSectionTitle} text-center`}>
          {/* <h4 className={styles.subTitle}>Speakers</h4> */}
          <h2 className={styles.mainTitle}>World Class Speakers</h2>
        </div>
        <br /><br />

        {buckets.map((bucket, index) => (
          <div key={index} className={styles.speakerBucketContainer}>
            <div className={`${styles.secTitle} text-center`}>
              <h3 className={styles.title}>{bucket.title}</h3>
            </div>
            <div className={`${styles.speakerRowContainer}`}>
              {bucket.speakers.length > 0 ? (
                bucket.speakers.map((speaker) => (
                  <div key={speaker.id} className={styles.speakerCardWrapper}>
                    <div className={styles.singleSpeaker}>
                      <div className={styles.speakerImage}>
                        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={speakerImages[speaker.id - 1]} 
                            alt={speaker.name} 
                          />
                        </a>
                      </div>
                      <div className={styles.speakerContent}>
                        <h4 className={styles.speakerName}>
                          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">{speaker.name}</a>
                        </h4>
                        <p className={styles.speakerDesignation}>
                          {speaker.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noSpeakerMessage}>
                  <p>Speaker to be determined</p>
                </div>
              )}
            </div>
            <br /><br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersHome;
