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
      <Section hasBgImgClassName='bg-img-hero'>
        <Hero />
      </Section>
      <Section titleShown='About' bgColored>
        <About />
      </Section>
      <Section titleShown='Projects'>
        <Projects />
      </Section>
      <Section titleShown='Testimonials' bgColored>
        <Testimonials />
      </Section>
      <Section titleShown="Let's Connect" hasBgImgClassName='bg-img-contact'>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
