import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle1, subtitle2, subtitle3, subtitle4, cta, video, repo } = hero;

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
    <section id="hero" name="hero">
      <Container>
        {/* All but cta */}
        <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          {/* Name and Subtitles */}
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                <span className="color-main">{name}</span> {title}
                <br />
              </h1>
            </Fade>
            <div className="hero-subs-container">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <h1 className="hero-sub">{subtitle1}</h1>
              </Fade>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
                <h1 className="hero-sub">{subtitle2}</h1>
              </Fade>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
                <h1 className="hero-sub">{subtitle3}</h1>
              </Fade>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2500} distance="30px">
                <h1 className="hero-sub hero-sub-last">{subtitle4}</h1>
              </Fade>
            </div>
          </Col>
          {/* Video */}
          <Col className="hero-vid-col">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={3000} distance="30px">
              {/* <Ratio aspectRatio="16x9"> */}
              <iframe
                width="590"
                height="345"
                // width="560"
                // height="315"
                className="hero-vid"
                title="Welcome Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={video}
              ></iframe>
              {/* </Ratio> */}
            </Fade>
          </Col>
        </Row>
        {/* cta */}
        <Row>
          <Col>
            <Fade bottom duration={1000} delay={3500} distance="30px">
              <p className="hero-cta">
                <Link to="about" className="cta-btn cta-btn--hero" smooth duration={1000}>
                  {cta}
                </Link>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
