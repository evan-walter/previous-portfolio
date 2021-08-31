import React from 'react';
import Fade from 'react-reveal/Fade';

const Success = () => {
  return (
    <Fade>
      <div className="submitted-container">
        <p className="submitted-msg">
          <div className="ctl-check">
            <i className="fa fa-check" aria-hidden="true" />
          </div>{' '}
          Contact form received. I look forward to being in touch. Thank you.
        </p>
      </div>
    </Fade>
  );
};

export default Success;
