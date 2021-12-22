import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Section from './Section';
import Testimonials from './Testimonials';

export default function App() {
  const [projsExpanded, setProjsExpanded] = useState(false);

  function handleProjs() {
    setProjsExpanded(s => !s);
  }

  // Collapse navbar projects when user clicks outside the dropdown
  function handleGlobalCollapseProjs() {
    if (projsExpanded) setProjsExpanded(false);
  }

  return (
    <div id='top' onClick={handleGlobalCollapseProjs}>
      <Navbar projsExpanded={projsExpanded} handleProjs={handleProjs} />
      <Section id='hero' next='about' bgImg='ewalter-3-2600.jpg'>
        <Hero next='about' />
      </Section>
      <Section id='about' next='projects' titleShown='ABOUT' bgColored>
        <About />
      </Section>
      <Section  id='projects' next='testimonials' titleShown='PROJECTS'>
        <Projects />
      </Section>
      <Section  id='testimonials' next='contact' titleShown='TESTIMONIALS' bgColored>
        <Testimonials />
      </Section>
      <Section id='contact' last bgImg='ewalter-4-2600.jpg' titleShown="LET'S CONNECT" titleGradient>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
