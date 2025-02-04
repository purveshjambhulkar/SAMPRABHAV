
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Timer from "./components/Timer";
// import SpeakersHome from "./components/SpeakersHome";
import About from "./components/About";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";
import Glimpse from "./components/Glimpse"; // Import the Glimpse component
import FAQ from "./components/FAQ"; // Import FAQ c mponent
import Testimonial from "./components/Testimonials";
import AboutHome from "./components/AboutHome";
import Speakers from "./components/Speaker";
import SpeakersHome from "./components/SpeakersHome";
import Contact from "./components/Contact";
import ScheduleNav from "./components/ScheduleNav";
const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes */}
        <Routes>
          {/* Glimpse Route: Only show Navbar, Glimpse, and Footer */}
          <Route
            path="/glimpse"
            element={
              <>
                <Glimpse />
                <Footer />
              </>
            }
          />

          {/* Other Routes: Show the full content */}
          <Route
            path="/"
            element={
              <>
                {/* <Navbar /> */}
                <section id="home">
                  <Section1 />
                </section>
                <section id="timer">
                  <Timer />
                </section>
                <section id="aboutHome">
                  <AboutHome />
                </section>
                <section id="features">
                  <Features />
                </section>
                <section id="speakers">
                  <SpeakersHome />
                </section>
                <section id="testimonials">
                  <Testimonial />
                </section>
                <section id="schedule">
                  <Schedule />
                </section>
                <Footer />
              </>
            }
          />

          {/* FAQ Route: Show FAQ section first, then Navbar */}
          <Route
            path="/faq"
            element={
              <>
                {/* <Navbar /> */}
                <section id="faq">
                  <FAQ />
                  <Footer />
                </section>
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
                {/* <Navbar /> */}
                <section id="testimonials">
                  <Testimonial />
                  <Footer />
                </section>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                {/* <Navmini /> */}
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/sponsors"
            element={
              <>
                {/* <Navmini /> */}
                <Sponsors />
                <Footer />
              </>
            }
          />
          <Route
            path="/speakers"
            element={
              <>
                {/* <Navmini /> */}
                <Speakers />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                {/* <Navmini /> */}
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/schedule"
            element={
              <>
                {/* <Navmini /> */}
                <ScheduleNav />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
