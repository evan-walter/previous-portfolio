import React, { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
// import TrustedBy from './TrustedBy/TrustedBy';
// import Technologies from './Technologies/Technologies';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* <TrustedBy /> inspired by jadjoubran.io*/}
      {/* <Technologies /> inspired by northtwofive.com */}
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
