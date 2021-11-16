import React from 'react';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';

export default function Footer() {
  const classNames = 'bg-footerbg text-footertext';

  return (
    <div className={classNames}>
      <div>Footer</div>
      <MyLink to='top'>
        <UpArrow />
      </MyLink>
      <div className='cursor-pointer' style={{ fontSize: '32px' }}>
        <i className='fa fa-github fa-inverse' />
        <i className='fa fa-linkedin fa-inverse' />
      </div>
    </div>
  );
}
