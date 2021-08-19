import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <Title title="Contact" />
        </Fade>
        <Fade bottom duration={1000} delay={750} distance="30px">
          <ContactForm />
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
