import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import NavbarPortfolio from './NavbarPortfolio';
import Projects from './Projects';
import Testimonials from './Testimonials';

export default function App() {
  return (
    <div>
      <NavbarPortfolio />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
