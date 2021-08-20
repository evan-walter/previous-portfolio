import React from 'react';
import Fade from 'react-reveal/Fade';

const Failed = () => {
  return (
    <Fade>
      <div className="submitted-container">
        <p className="submitted-msg">
          <div className="ctl-x">
            <i className="fa fa-times" aria-hidden="true" />
          </div>{' '}
          Oops! It looks like there was an issue with the form submission. Please try again. If the
          issue persists, please feel free to reach out to me on{' '}
          <div className="submitted-msg failed-link-wrap">
            <a
              className="failed-link text-color-main"
              href="https://www.linkedin.com/in/evan-walter-101bb739/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          .
        </p>
      </div>
    </Fade>
  );
};

export default Failed;
