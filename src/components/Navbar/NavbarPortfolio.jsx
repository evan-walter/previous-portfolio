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
    <Navbar collapseOnSelect expand="lg" id="navbar" name="navbar">
      <Container id="navbar-wrap" fluid>
        <Fade duration={1000} delay={2750} distance="30px">
          <Navbar.Brand className="logo-outer-wrap">
            <div className="logo-inner-wrap">
              <LogoImg className="logo-img" alt="Evan Walter | Developer" filename={img} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="toggler-ctl" collapseOnSelect expand="lg">
            <Nav.Item className="nav-sec-link color-main">Home</Nav.Item>
            <Nav.Item className="nav-sec-link color-main" smooth duration={1000}>
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Nav.Item>
            <NavDropdown id="nav-dropdown-ctl" title="Projects">
              <NavDropdown.Item id="nav-dropdown-item-ctl">
                <Link to="projects" smooth duration={1000}>
                  All
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown-item-ctl">
                <Link to="w3" smooth duration={1000}>
                  W3 Sales
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown-item-ctl">
                <Link to="drummond" smooth duration={1000}>
                  Drummond's Clothing Store
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown-item-ctl">
                <Link to="iuniverse" smooth duration={1000}>
                  iUniverse
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown-item-ctl">
                <Link to="wine-pairing" smooth duration={1000}>
                  Wine Pairing App
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-sec-link color-main">
              <Link to="testimonials" smooth duration={1000}>
                Testimonials
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-sec-link color-main">
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </Nav.Item>
          </Navbar.Collapse>
          {/* <Nav.Item className="toggler-wrap">
            <i className="fa fa-bars"></i>
          </Nav.Item> */}
        </Fade>
      </Container>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarPortfolio;

// import React, { useContext } from 'react';
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';
// import PortfolioContext from '../../context/context';
// import LogoImg from '../Image/LogoImg';

// const NavBar = () => {
//   const { navbar } = useContext(PortfolioContext);
//   const { img } = navbar;

//   return (
//     <Navbar>
//       <Container id="navbar" name="navbar" fluid>
//         <Fade duration={1000} delay={2750} distance="30px">
//           <Navbar.Brand className="logo-outer-wrap">
//             <div className="logo-inner-wrap">
//               <LogoImg className="nav-item__logo" alt="Evan Walter | Developer" filename={img} />
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
//           <div>
//             <div className="nav-item__link color-main">Home</div>
//           </div>
//           <Nav.Item className="nav-item__link color-main" smooth duration={1000}>
//             <Link to="about" smooth duration={1000}>
//               About
//             </Link>
//           </Nav.Item>
//           <NavDropdown
//             title="Projects"
//             id="collasible-nav-dropdown"
//             className="nav-item__link color-main"
//           >
//             <NavDropdown.Item className="nav-item__link color-main">
//               <Link to="projects" smooth duration={1000}>
//                 All
//               </Link>
//             </NavDropdown.Item>
//             <NavDropdown.Item className="nav-item__link color-main">
//               <Link to="w3" smooth duration={1000}>
//                 W3 Sales
//               </Link>
//             </NavDropdown.Item>
//             <NavDropdown.Item className="nav-item__link color-main">
//               <Link to="drummond" smooth duration={1000}>
//                 Drummond's Clothing Store
//               </Link>
//             </NavDropdown.Item>
//             <NavDropdown.Item className="nav-item__link color-main">
//               <Link to="iuniverse" smooth duration={1000}>
//                 iUniverse
//               </Link>
//             </NavDropdown.Item>
//             <NavDropdown.Item className="nav-item__link color-main">
//               <Link to="wine-pairing" smooth duration={1000}>
//                 Wine Pairing App
//               </Link>
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link className="nav-item__link color-main">Testimonials</Nav.Link>
//           <Nav.Link className="nav-item__link color-main" smooth duration={1000}>
//             Contact
//           </Nav.Link>
//         </Fade>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
