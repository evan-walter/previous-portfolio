import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Testimonials = () => {
  const { testimonials } = useContext(PortfolioContext);
  const { id, body, author } = testimonials;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="testimonials">
      <Container>
        <Title title="Testimonials" />
        <Row className="">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="">{body}</div>
            <div className="">- {author}</div>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
