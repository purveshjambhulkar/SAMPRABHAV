import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa"; // Import icons
import "../styles/Navbar.css";

const Header = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      opacity: 0,
      easing: "ease-in-out",
    };

    // Applying consistent animation to all text elements
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".event-name", { ...scrollRevealOption, delay: 700 });
    ScrollReveal().reveal(".sponsor-text", {
      ...scrollRevealOption,
      delay: 900,
    });
    ScrollReveal().reveal(".event-date", {
      ...scrollRevealOption,
      delay: 1100,
    });
    ScrollReveal().reveal(".event-info", {
      ...scrollRevealOption,
      delay: 1300,
    });
    ScrollReveal().reveal(".register-btn", {
      ...scrollRevealOption,
      delay: 1500,
    });

    // Adding a fade-up animation for the button with a delay
    ScrollReveal().reveal(".register-btn", {
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      delay: 1500,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  // Styles for better spacing and alignment
  const departmentStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "28px",
    fontWeight: "700",
    background: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(45deg, #faac1d, #faac1d)",
    color: "#faac1d",
    textAlign: "center",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
    textTransform: "uppercase",
    lineHeight: "1.8",
    letterSpacing: "1px",
    marginBottom: "-1rem",
    marginTop: "0rem", // Added top margin for spacing
  };

  const eventInfoStyle = {
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "2rem",
  };

  // Style for icons (color set to #faac1d)
  const iconStyle = {
    color: "#faac1d",
    marginRight: "5px",
  };

  return (
    <header className="header__container">
      <div className="header__content">
        <h1 style={departmentStyle}>
          Department of Pharmaceutical Management, NIPER Mohali
        </h1>
        <p
          className="event-name"
          style={{
            fontFamily: "Orbitron",
            fontWeight: "bold",
            fontSize: "5vw",
            textAlign: "center",
            lineHeight: "1.2",
            marginBottom: "-0.5rem",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
            wordWrap: "break-word",
            whiteSpace: "normal",
            backgroundImage: "white",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          SAMPRABHAV 2025
        </p>
        <p
          className="sponsor-text"
          style={{
            fontSize: "1.2rem",
            color: "white",
            fontWeight: "500",
            marginTop: "10px",
            textAlign: "center",
            letterSpacing: "1px",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
            marginBottom: "1rem",
          }}
        >
          <span>Powered by - </span>
          <span className="golden-glow-text">AdametNext</span> <br />
          <span>Co-powered by - </span>
          <span className="silver-glow-text">PharmaSapience</span>
        </p>
        <p
          className="event-date"
          style={{
            fontSize: "2rem",
            textAlign: "center",
            letterSpacing: "1px",
            fontWeight: "700",
            backgroundImage: "linear-gradient(45deg, #faac1d, #faac1d)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "1.5rem",
          }}
        >
          FEBRUARY 22-23
        </p>
        <p className="event-info" style={eventInfoStyle}>
          <FaUsers style={iconStyle} /> 12+ SPEAKERS |{" "}
          <FaMapMarkerAlt style={iconStyle} /> NIPER CAMPUS, MOHALI, PUNJAB
        </p>
        <button
          className="register-btn"
          style={{
            display: "block",
            margin: "0 auto",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "rgb(0, 170, 255)",
            color: "white",
            marginBottom:"1em",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            "&:hover": {
              backgroundColor: "rgb(0, 150, 255)",
              transform: "scale(1.05)",
            },
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)")
          }
          onMouseOut={(e) => (e.target.style.boxShadow = "")}
          onClick={() =>
            window.open("https://forms.gle/Hcogzn1QKBxKXKUbA", "_blank")
          }
        >
          REGISTER NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
