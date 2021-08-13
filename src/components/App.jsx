import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
// import TrustedBy from './TrustedBy/TrustedBy';
// import Technologies from './Technologies/Technologies';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  navbarData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [navbar, setNavbar] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavbar({ ...navbarData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navbar, hero, about, projects, contact, footer }}>
      <Navbar />
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
