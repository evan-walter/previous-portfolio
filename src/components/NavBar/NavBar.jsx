import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const NavBar = () => {
  // const { navbar } = useContext(PortfolioContext);

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
    <Container fluid id="navbar" className="nav-item">
      <Fade duration={1000} delay={3000} distance="30px">
        <LogoImg
          className="nav-item__logo"
          alt="Evan Walter Developer"
          filename={'../../images/favicon.png'}
          onClick={() => location.reload()}
        />
        <div className="nav-item__title">
          <a className="text-color-main" onClick={() => location.reload()}>Evan Walter</a>
        </div>
        <Link to="about" smooth duration={1000}>
          <div className="nav-item__link text-color-main">About</div>
        </Link>
        <Link to="projects" smooth duration={1000}>
          <div className="nav-item__link text-color-main">Projects</div>
        </Link>
        <Link to="contact" smooth duration={1000}>
          <div className="nav-item__link text-color-main">Contact</div>
        </Link>
      </Fade>
    </Container>
  );
};

export default NavBar;
