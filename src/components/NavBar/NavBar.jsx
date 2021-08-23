import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const NavBar = () => {
  const { navbar } = useContext(PortfolioContext);
  const { img } = navbar;

  return (
    <Container fluid id="navbar" className="nav-item">
      <Fade duration={1000} delay={3750} distance="30px">
        <div className="logo-outer-wrap" onClick={() => location.reload()}>
          <div className="logo-inner-wrap">
            <LogoImg className="nav-item__logo" alt="Evan Walter | Developer" filename={img} />
          </div>
        </div>
        <Link to="about" smooth duration={1000}>
          <div className="nav-item__link text-color-main">About</div>
        </Link>
        <Link to="projects" smooth duration={1000}>
          <div className="nav-item__link text-color-main">Projects</div>
        </Link>
        <Link to="testimonials" smooth duration={1000}>
          <div className="nav-item__link text-color-main">Testimonials</div>
        </Link>
        <Link to="contact" smooth duration={1000}>
          <div className="nav-item__link text-color-main">Contact</div>
        </Link>
      </Fade>
    </Container>
  );
};

export default NavBar;
