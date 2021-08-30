import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" name="contact">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <h1 className="hero-title ctitle-control">
            <span className="color-main">Contact</span>
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={750} distance="30px">
          <ContactForm />
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
