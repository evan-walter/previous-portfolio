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
        <div></div>
        <hr />
        <Row xs={1} sm={1} md={3} lg={3} xl={3} xxl={3}>
          <Col>
            <p className="footer__text">
              <a href="https://github.com/Evan-Walter/portfolio/" target="_blank">
                This website
              </a>{' '}
              was built with{' '}
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>{' '}
              and{' '}
              <a href="https://www.gatsbyjs.com/" target="_blank">
                Gatsby
              </a>
            </p>
          </Col>
          <Col>
            <p className="footer__text">
              © {new Date().getFullYear()}{' '}
              <a href="https://github.com/Evan-Walter" target="_blank">
                Evan Walter
              </a>
            </p>
          </Col>
          <Col>
            <p className="footer__text">
              Special thanks to{' '}
              <a href="https://github.com/cobidev" target="_blank">
                Jacobo Martínez
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
