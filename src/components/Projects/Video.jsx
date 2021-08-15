import React, { useState } from 'react';

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style="position: relative; padding-bottom: 62.5%; height: 0;">
        <iframe
          src="https://www.loom.com/embed/7e5eec45f0d047689af2eff7c8d9fc66"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        ></iframe>
      </div>
    </>
  );
};

export default Video;
