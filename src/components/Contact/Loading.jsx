import React from 'react';
import Fade from 'react-reveal/Fade';

const Success = () => {
  return (
    <Fade>
      <div className="submitted-container">
        <div className="submitted-msg">
          {/* <i className="fas fa-spinner fa-spin fa-3x" aria-hidden="true" /> */}
          Loading...
        </div>
      </div>
    </Fade>
  );
};

export default Success;
