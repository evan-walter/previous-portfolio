import React from 'react';
import { Link } from 'react-scroll';
import { UpArrow } from './Arrows';

export default function Footer() {
  const classNames = 'bg-footerbg text-footertext';

  return (
    <div className={classNames}>
      <div>Footer</div>
      <Link to='top' smooth duration={850}>
          <UpArrow />
        </Link>
      <div className='cursor-pointer' style={{ fontSize: '32px' }}>
        <i className='fa fa-github fa-inverse' />
        <i className='fa fa-linkedin fa-inverse' />
      </div>
    </div>
  );
}
