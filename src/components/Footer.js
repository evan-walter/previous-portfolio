import React from 'react';
import { UpArrow } from './Arrows';

export default function Footer() {
  return (
    <div>
      <div>Footer</div>
      <UpArrow />
      <i className='fa fa-github' style={{ fontSize: '32px' }}></i>
      <i className='fa fa-linkedin' style={{ fontSize: '32px' }}></i>
    </div>
  );
}
