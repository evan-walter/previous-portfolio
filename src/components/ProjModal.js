import React from 'react';

export default function ProjModal({ showModal, whichVideo, whichTitle }) {
  return (
    <div className='w-full z-50 absolute bg-red-100 border-2 border-black'> {/**className={showModal ? 'block' : 'hidden'} */}
      <div className='p-2 m-auto bg-white grid grid-cols-3 items-center border-b border-gray-400'>
        <div></div>
        <div className='text-center'>{whichVideo}Modal - trying to get this to display the video link</div>
        <div className='text-right'>
          <i className='fa fa-times' aria-hidden='true' />
        </div>
      </div>
        <div>
          <iframe src='https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12' title={whichTitle} className='video-modal' /> {/**src={whichVideo} title={whichTitle} className='video-modal' */} {/** webkitAllowFullScreen mozAllowFullScreen allowFullScreen */}
        </div>
    </div>
  );
}
