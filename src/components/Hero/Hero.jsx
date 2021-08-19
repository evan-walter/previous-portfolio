import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle1, subtitle2, subtitle3, subtitle4, cta, video } = hero;

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
    <section id="hero">
      <Container>
        <div className="column-left">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title} <span className="text-color-main">{name}</span>
              <br />
            </h1>
          </Fade>
          <div className="hero-subtitles-container">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <h1 className="hero-subtitle">{subtitle1}</h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
              <h1 className="hero-subtitle">{subtitle2}</h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
              <h1 className="hero-subtitle">{subtitle3}</h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2500} distance="30px">
              <h1 className="hero-subtitle">{subtitle4}</h1>
            </Fade>
          </div>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={3000} distance="30px">
            <p className="hero-cta">
              <Link to="about" className="cta-btn cta-btn--hero" smooth duration={1000}>
                {cta}
              </Link>
            </p>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Header;
