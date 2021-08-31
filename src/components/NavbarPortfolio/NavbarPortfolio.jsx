import React, { useContext } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const NavbarPortfolio = () => {
  const { navbarPortfolio } = useContext(PortfolioContext);
  const { img } = navbarPortfolio;

  return (
    <Navbar id="navbar" name="navbar" className="justify-content-end" collapseOnSelect expand="lg">
      <Container id="navbar-wrap">
        <Navbar.Brand>
          <div className="logo-inner-wrap">
            <LogoImg className="logo-img" alt="evan-walter-developer" filename={img} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="nav-sec-link color-main">Home</Nav.Link>
            <Nav.Link className="nav-sec-link color-main">
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-sec-link color-main">
              <NavDropdown title="Projects" id="nav-drop-ctl">
                <NavDropdown.Item id="nav-drop-item-ctl">
                  <Link to="projects" smooth duration={1000} className="nav-drop-link-ctl">
                    All
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="nav-drop-item-ctl">
                  <Link to="w3" smooth duration={1000}>
                    W3 Sales
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item id="nav-drop-item-ctl">
                  <Link to="drummond" smooth duration={1000}>
                    Drummond&apos;s Clothing Store
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item id="nav-drop-item-ctl">
                  <Link to="iuniverse" smooth duration={1000}>
                    iUniverse
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item id="nav-drop-item-ctl">
                  <Link to="wine-pairing" smooth duration={1000}>
                    Wine Pairing App
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link className="nav-sec-link color-main">
              <Link to="testimonials" smooth duration={1000}>
                Testimonials
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-sec-link color-main">
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
