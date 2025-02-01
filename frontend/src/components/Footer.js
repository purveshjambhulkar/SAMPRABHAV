import React from "react";
import "../styles/Footer.css"; // Ensure you have the updated CSS file
import logo from "../assests/logo.png"; // Import your logo
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Contact Section */}
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                {/* Logo */}
                <a href="#">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      maxWidth: "250px", // Increased size
                      height: "auto",
                      margin: "0 auto", // Ensures it's centered
                      display: "block",
                    }}
                  />
                </a>
                <p>
                  Samprabhav - Union of Magnates is a national pharma colloquium
                  held by students of DOPM as a continuation of our yearly
                  custom. The colloquium provides the top pharmaceutical minds in
                  the nation with a forum for interaction, discussion, and the
                  establishment of new connections.
                </p>
                <div className="hr"></div>
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>
                  +01 2345 6789 12 <span>|</span> +01 2345 6789 12
                </h6>

                {/* Social Media Links */}
                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>Copyright &copy; 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
