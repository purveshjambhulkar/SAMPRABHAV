import React from 'react';
import aboutimg from "../assests/about.jpg"; // Make sure this path is correct
import '../styles/About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="anim-icons full-width">
        <span className="icon icon-circle-blue wow fadeIn"></span>
        <span className="icon icon-dots wow fadeInleft"></span>
        <span className="icon icon-circle-1 wow zoomIn"></span>
      </div>

      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Samprabhav</span>
                <h2>Welcome to the Samprabhav</h2>
                <div className="text">
                  Samprabhav – Union of Magnates, is a splendid gathering where industry experts concentrate with budding minds, a fusion that possesses the capability to ignite a small spark capable of spreading into a transformative influence within the pharmaceutical sector. The event's five focal points thoughtfully address all industry dimensions, culminating in a well-rounded and enriching experience. Moreover, after each session, an open Q&A allows every student to seize equal opportunities, gaining deeper insights into industry operations. Thus, the mega event is a testament to student management, exceptional speak sessions, and student brainstorming, making it an all-encompassing program. In totality, it's a mega event that adds up to a great quantum of glory for the Department of Pharmaceutical Management, NIPER S.A.S. Nagar (Mohali).
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="image-box">
              <figure className="image wow fadeIn">
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
