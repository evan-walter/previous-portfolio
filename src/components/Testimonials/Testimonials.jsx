import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Testimonials = () => {
  const { testimonials } = useContext(PortfolioContext);
  const { body, author, company1, company2 } = testimonials;

  return (
    <section id="testimonials">
      <Container>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <Title title="Testimonials" />
        </Fade>
        <div className="t-full-wrap">
          <Row>
            <Col className="t-info-wrap">
              <Fade bottom duration={1000} delay={1000} distance="30px">
                <p className="t-info">{body}</p>
                <p className="t-info t-author">- {author}</p>
                <p className="t-info t-company">
                  {company1}, {company2}
                </p>
              </Fade>
            </Col>
          </Row>
          <Col className="justify-content-md-center">
            <Fade bottom duration={1000} delay={1300} distance="30px">
              <Link to="contact" smooth duration={1000}>
                <div className="down arrow-ctl">
                  <i id="arrow" className="fa fa-angle-down fa-2x" aria-hidden="true" />
                </div>
              </Link>
            </Fade>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
