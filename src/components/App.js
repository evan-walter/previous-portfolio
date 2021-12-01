import React from 'react';
import About from './About';
import Contact from './contact/Contact';
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
      <Section id='hero' next='about'>
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
      <div className='bg-gray-200'>
        <Section id='contact' last titleShown="LET'S CONNECT" titleGradient>
          <Contact />
        </Section>
      </div>
      <Footer />
    </div>
  );
}
