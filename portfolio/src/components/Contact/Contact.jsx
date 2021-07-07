import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <p className="contact-wrapper__text">{cta || 'Would you like to get in touch?'}</p>
          </Fade>
          <Fade bottom duration={1000} delay={900} distance="30px">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/evan-walter-101bb739'}
            >
              {btn || 'Get in Touch'}
            </a>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
