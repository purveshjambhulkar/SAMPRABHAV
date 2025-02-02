import React from 'react';
import '../styles/Speakers.css';

// Import speaker images from "../assests/Speakers/"
import speaker1 from "../assests/Speakers/1.png";
import speaker2 from "../assests/Speakers/2.png";
import speaker3 from "../assests/Speakers/3.png";
import speaker4 from "../assests/Speakers/4.png";
import speaker5 from "../assests/Speakers/5.png";
import speaker6 from "../assests/Speakers/6.png";
import speaker7 from "../assests/Speakers/7.png";

const speakerImages = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6, speaker7];

const buckets = [
  {
    title: "Fueling Pharma Success: The Power of Digital and Global Marketing",
    speakers: [
      { id: 1, name: "Hirak Bose", designation: "Senior Vice President, Sales and Marketing, Lupin Ltd." },
      { id: 2, name: "Manish Bajaj", designation: "Cluster Head at Dr Reddy’s Laboratories" }
    ]
  },
  {
    title: "Pioneering Trends: Reshaping the Pharmaceutical Landscape",
    speakers: [
      { id: 3, name: "Mr. Gopal Rao", designation: "Associate Vice President, Business Development and Licensing, Biocon Biologics", category: "Biologics" },
      { id: 4, name: "Ajayy Kumar Shukla", designation: "Sales Manager (Medtronic)", category: "Medical devices" }
    ]
  },
  {
    title: "Re-envisioning boundaries: Transformative Strategies for Business and Product Excellence (Speaker to be determined)",
    speakers: [] // No speaker yet
  },
  {
    title: "Redefining Talent Paradigms: Crafting Future Workforce",
    speakers: [
      { id: 5, name: "Megha Soni", designation: "Associate Director-People Success, Solutionec" },
      { id: 6, name: "Uday Kanth", designation: "Senior Manager- HR, Trinity Life Sciences" }
    ]
  },
  {
    title: "Pharma Horizons: Innovation, Analytics, and Strategic Transformation",
    speakers: [
      { id: 7, name: "Mr. Virendra Kumar", designation: "Founder & CEO, AdametNext", category: "CI" },
      { id: 8, name: "Ms. Ritu Rana", designation: "Senior Manager-Forecasting CoE, Axtria", category: "Forecasting" },
      { id: 9, name: "Mr. Suresh Pemmaraju", designation: "Associate Vice President, Molekule Consulting", category: "Strategic Consulting" }
    ]
  }
];

const Speakers = () => {
  return (
    <div className="speakers-section">
      <div className="container">
        {/* Section Title */}
        <div className="meeta-section-title text-center">
          <h4 className="sub-title">Speakers</h4>
          <h2 className="main-title">World Class Speakers</h2>
        </div>
        <br /><br />

        {buckets.map((bucket, index) => (
          <div key={index}>
            <div className="sec-title text-center">
              <h3 className="title">
                {bucket.title}
              </h3>
            </div>
            <div className="row gy-5 meeta-speakers-row" style={{ justifyContent: "center" }}>
              {bucket.speakers.length > 0 ? (
                bucket.speakers.map((speaker) => (
                  <div className="col-lg-4 col-sm-6" key={speaker.id}>
                    <div className="single-speaker">
                      <div className="speaker-image">
                        <a href={`./speakers?spid=${speaker.id}`}>
                          <img 
                            src={speakerImages[(speaker.id - 1) % speakerImages.length]} 
                            alt="Speaker" 
                          />
                        </a>
                      </div>
                      <div className="speaker-content">
                        <h4 className="speaker-name">
                          <a href="#">{speaker.name}</a>
                        </h4>
                        <p className="speaker-designation">
                          {speaker.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
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

export default Speakers;
