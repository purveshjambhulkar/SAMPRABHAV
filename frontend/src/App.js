import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Timer from './components/Timer';
import Speakers from './components/Speakers';
import About from './components/About';
import Features from './components/Features';
import Sponsors from './components/Sponsors';
import Glimpse from './components/Glimpse'; // Import the Glimpse component
import FAQ from './components/FAQ'; // Import FAQ component

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes */}
        <Routes>
          {/* Glimpse Route: Only show Navbar, Glimpse, and Footer */}
          <Route path="/glimpse" element={<><Glimpse /><Footer /></>} />

          {/* Other Routes: Show the full content */}
          <Route path="/" element={
            <>
              {/* <Navbar /> */}
              <section id="home">
                <Section1 />
              </section>
              <section id="timer">
                <Timer />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="features">
                <Features />
              </section>
              <section id="speakers">
                <Speakers />
              </section>
              <section id="sponsors">
                <Sponsors />
              </section>
              <section id="schedule">
                <Schedule />
              </section>
              <Footer />
            </>
          } />

          {/* FAQ Route: Show FAQ section first, then Navbar */}
          <Route path="/faq" element={
            <>
              {/* <Navbar /> */}
              <section id="faq">
                <FAQ />
              </section>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
