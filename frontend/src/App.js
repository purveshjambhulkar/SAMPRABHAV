import React from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Timer from './components/Timer';
import Speakers from './components/Speakers';
import About from './components/About';
import Features from './components/Features';
import Sponsors from './components/Sponsors';

const App = () => {
  return (
    <div>
      {/* <Navbar /> Navbar stays on top */}
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
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
