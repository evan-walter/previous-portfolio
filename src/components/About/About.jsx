import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about" name="about">
      <Container>
        <Title title="About" />
        <Row className="about-full-wrap">
          {/* Image */}
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-image">
                {' '}
                <AboutImg alt="about-img" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-info-wrap">
                {' '}
                {/* About Info */}
                <p className="about-info">{paragraphOne}</p>
                <p className="about-info">{paragraphTwo}</p>
                <p className="about-info">{paragraphThree}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <Col className="justify-content-md-center">
          <Fade bottom duration={1000} delay={1300} distance="30px">
            <Link to="projects" smooth duration={1000}>
              <div className="down arrow-ctl">
                <i id="arrow" className="fa fa-angle-down fa-2x" aria-hidden="true" />
              </div>
            </Link>
          </Fade>
        </Col>
      </Container>
    </section>
  );
};

export default About;
