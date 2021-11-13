import React from 'react';
import { UpArrow } from './Arrows';

export default function Footer() {
  const backgroundColor = 'bg-footerbg';

  return (
    <div className={backgroundColor}>
      <div>Footer</div>
      <UpArrow />
      <div className='cursor-pointer' style={{ fontSize: '32px' }}>
        <i className='fa fa-github fa-inverse' />
        <i className='fa fa-linkedin fa-inverse' />
      </div>
    </div>
  );
}
