import React from 'react';
import Fade from 'react-reveal/Fade';

const Loading = () => {
  return (
    <Fade>
      <div className="submitted-container">
        <div className="submitted-msg">Loading...</div>
      </div>
    </Fade>
  );
};

export default Loading;
