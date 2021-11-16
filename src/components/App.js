import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Section from './Section';
import Testimonials from './Testimonials';

export default function App() {
  return (
    <div id='top'>
      <Navbar />
      <Section id='hero' next='about' hasBgImgClassName='bg-img-hero'>
        <Hero next='about' />
      </Section>
      <Section id='about' next='projects' titleShown='About' bgColored>
        <About />
      </Section>
      <Section  id='projects' next='testimonials' titleShown='Projects' fluidHeight>
        <Projects />
      </Section>
      <Section  id='testimonials' next='contact' titleShown='Testimonials' bgColored>
        <Testimonials />
      </Section>
      <Section id='contact' last titleShown="Let's Connect" hasBgImgClassName='bg-img-contact'>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
