import React, { useContext } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const NavBar = () => {
  const { navbar } = useContext(PortfolioContext);
  const { img } = navbar;

  return (
    <Navbar>
      <Container id="navbar" name="navbar" fluid>
        <Fade duration={1000} delay={2750} distance="30px">
          <Navbar.Brand className="logo-outer-wrap">
            <Navbar.Brand className="logo-inner-wrap">
              <LogoImg className="nav-item__logo" alt="Evan Walter | Developer" filename={img} />
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <div>
            <div className="nav-item__link color-main">Home</div>
          </div>
          <Nav.Item className="nav-item__link color-main" smooth duration={1000}>
            <Link to="about" smooth duration={1000}>
              About
            </Link>
          </Nav.Item>
          <NavDropdown
            title="Projects"
            id="collasible-nav-dropdown"
            className="nav-item__link color-main"
          >
            <NavDropdown.Item className="nav-item__link color-main">
              <Link to="projects" smooth duration={1000}>
                All
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-item__link color-main">
              <Link to="w3" smooth duration={1000}>
                W3 Sales
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-item__link color-main">
              <Link to="drummond" smooth duration={1000}>
                Drummond's Clothing Store
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-item__link color-main">
              <Link to="iuniverse" smooth duration={1000}>
                iUniverse
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-item__link color-main">
              <Link to="wine-pairing" smooth duration={1000}>
                Wine Pairing App
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="nav-item__link color-main">Testimonials</Nav.Link>
          <Nav.Link className="nav-item__link color-main" smooth duration={1000}>
            Contact
          </Nav.Link>
        </Fade>
      </Container>
    </Navbar>
    // <Container id="navbar" name="navbar" fluid>
    //   <Fade duration={1000} delay={3250} distance="30px">
    //     <div className="logo-outer-wrap" onClick={() => location.reload()}>
    //       <div className="logo-inner-wrap">
    //         <LogoImg className="nav-item__logo" alt="Evan Walter | Developer" filename={img} />
    //       </div>
    //     </div>
    //     <div>
    //       <div className="nav-item__link color-main" onClick={() => location.reload()}>
    //         Home
    //       </div>
    //     </div>
    //     <Link to="about" smooth duration={1000}>
    //       <div className="nav-item__link color-main">About</div>
    //     </Link>
    //     <Link to="projects" smooth duration={1000}>
    //       <div className="nav-item__link color-main">Projects</div>
    //     </Link>
    //     <Link to="testimonials" smooth duration={1000}>
    //       <div className="nav-item__link color-main">Testimonials</div>
    //     </Link>
    //     <Link to="contact" smooth duration={1000}>
    //       <div className="nav-item__link color-main">Contact</div>
    //     </Link>
    //   </Fade>
    // </Container>
  );
};

export default NavBar;
