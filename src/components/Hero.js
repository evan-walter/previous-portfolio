import React from 'react';
import { DownArrow } from './Arrows';

export default function Hero() {
  return (
    <div>
      <h2>Hello, my name is Evan.</h2>
      <h2>I am a Software Engineer specializing in React.</h2>
      <div className='cursor-pointer' style={{ fontSize: '32px' }}>
        <div><i className='fa fa-github' /></div>        
        <div><i className='fa fa-linkedin' /></div> 
      </div>
      <div className='cursor-pointer'>
        <i className='fa fa-angle-down fa-2x' />
      </div>
    </div>
  );
}
