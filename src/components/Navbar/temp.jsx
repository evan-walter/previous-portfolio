import React, { useContext } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const NavbarPortfolio = () => {
  const { navbar } = useContext(PortfolioContext);
  const { img } = navbar;

  return (
    <Navbar id="navbar" name="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container id="navbar-wrap">
        <Navbar.Brand>
          <div className="logo-inner-wrap">
            <LogoImg className="logo-img" alt="Evan Walter | Developer" filename={img} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="projects" smooth duration={1000}>
                  All
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="w3" smooth duration={1000}>
                  W3 Sales
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="drummond" smooth duration={1000}>
                  Drummond's Clothing Store
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="iuniverse" smooth duration={1000}>
                  iUniverse
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="testimonials" smooth duration={1000}>
                Testimonials
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPortfolio;
