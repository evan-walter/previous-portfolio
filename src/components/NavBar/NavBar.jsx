import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavBar = () => {
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
    <section id="home">
      <Container>
        <Fade>
          <Row>
            <Col>
              <Link to="home" smooth duration={1000}></Link>
            </Col>
            {/* logo */}
            <Col>
              <Link to="home" smooth duration={1000}>
                Home
              </Link>
            </Col>
            <Col>
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Col>
            <Col>
              <Link to="trustedBy" smooth duration={1000}>
                Trusted By
              </Link>
            </Col>
            <Col>
              <Link to="projects" smooth duration={1000}>
                Works
              </Link>
            </Col>
            <Col>
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default NavBar;
