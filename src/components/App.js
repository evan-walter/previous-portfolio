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
    <div>
      <Navbar />
      <Section id='hero' hasBgImgClassName='bg-img-hero'>
        <Hero />
      </Section>
      <Section  id='about' titleShown='About' bgColored>
        <About />
      </Section>
      <Section  id='projects' titleShown='Projects' fluidHeight>
        <Projects />
      </Section>
      <Section  id='testimonials' titleShown='Testimonials' bgColored>
        <Testimonials />
      </Section>
      <Section id='contact' titleShown="Let's Connect" hasBgImgClassName='bg-img-contact'>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
