import React from 'react';

export default function ProjModal({ showModal, whichVideo, whichTitle }) {

  return (
    <div className='h-screen w-screen fixed inset-0 z-50 bg-black bg-opacity-60'> {/**className={showModal ? 'block' : 'hidden'} */}
      <div className='m-8 border-2 border-black'>
        <div onClick={showModal} className='p-2 m-auto bg-white flex items-center justify-end border-b border-gray-400'>
          <i className='fa fa-times' aria-hidden='true' />
        </div>
        <div className='flex justify-center'>
          <div className=''>
            <iframe src='https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12' title={whichTitle} className='video-modal' /> {/**src={whichVideo} title={whichTitle} className='video-modal' */} {/** webkitAllowFullScreen mozAllowFullScreen allowFullScreen */}
          </div>
        </div>
      </div>
    </div>
  );
}
