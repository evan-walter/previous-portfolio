import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <div className="arrow-ctl">
              <i id="arrow" className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </div>
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <Row xs={1} sm={1} md={3} lg={3} xl={3} xxl={3}>
          <Col>
            <p className="footer__text">Site built with ReactJS and GatsbyJS</p>
          </Col>
          <Col>
            <p className="footer__text">© {new Date().getFullYear()} Evan Walter</p>
          </Col>
          <Col>
            <p className="footer__text">Special thanks to cobidev/simplefolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
