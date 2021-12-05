import React from 'react';

export default function Modal({ whichVideo, whichTitle }) {
  return (
    <div className='m-0 w-full z-50 absolute bg-gray-300'>
      <div>
        <iframe src={whichVideo} title={whichTitle} className='video-modal' webkitAllowFullScreen mozAllowFullScreen allowFullScreen />
      </div>
      <div>{whichVideo}hello</div>
    </div>
  );
}
