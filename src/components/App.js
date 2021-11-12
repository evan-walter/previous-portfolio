import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import NavbarPortfolio from './NavbarPortfolio';
import Projects from './Projects';
import Section from './Section';
import Testimonials from './Testimonials';

export default function App() {
  return (
    <div>
      <NavbarPortfolio />
      <Hero />
      <Section title='About'>
        <About />
      </Section>
      <Section title='Projects'>
        <Projects />
      </Section>
      <Section title='Testimonials'>
        <Testimonials />
      </Section>
      <Section title="Let's Connect">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
