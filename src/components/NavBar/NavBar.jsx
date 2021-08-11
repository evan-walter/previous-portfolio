import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <div id="navbar">
      <Container>
        <Fade>
          <Row>
            <Col className="link text-color-main">
              <Link to="home">
                <LogoImg alt="Evan Walter Developer" filename={'../../images/favicon.png'} />
              </Link>
            </Col>
            <Col className="link text-color-main">
              <Link to="home">Home</Link>
            </Col>
            <Col className="link text-color-main">
              <Link to="about">About</Link>
            </Col>
            <Col className="link text-color-main">
              <Link to="projects">Projects</Link>
            </Col>
            <Col className="link text-color-main">
              <Link to="contact">Contact</Link>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default NavBar;
