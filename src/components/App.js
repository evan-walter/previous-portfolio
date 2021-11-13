import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import NavbarPortfolio from './NavbarPortfolio';
import Projects from './Projects';
import SectionNormal from './SectionNormal';
import Testimonials from './Testimonials';

export default function App() {
  return (
    <div>
      <NavbarPortfolio />
      <Hero />
      <SectionNormal title='About' bgColored>
        <About />
      </SectionNormal>
      <SectionNormal title='Projects'>
        <Projects />
      </SectionNormal>
      <SectionNormal title='Testimonials' bgColored>
        <Testimonials />
      </SectionNormal>
      <Contact />
      <Footer />
    </div>
  );
}
