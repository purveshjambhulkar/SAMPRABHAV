import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section1 from './components/Section1';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Timer from './components/Timer';
import Speakers from './components/Speakers';
import About from './components/About';
import Speakers2 from './components/Speakers2';
import Features from './components/Features';

const App = () => {
  return (
    <div>
      <Section1 />
      <Timer/>
      <About/>
      <Features/>
      <Speakers/>
      <Speakers2/>
      <Schedule/>
      <Footer/>
    </div>
  );
};

export default App;
