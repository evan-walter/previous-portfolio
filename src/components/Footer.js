import React from 'react';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const classNames = 'bg-footerbg text-footertext';

  return (
    <div className={classNames}>
      <div>Footer</div>
      <MyLink to='top'>
        <UpArrow />
      </MyLink>
      <Socials addClassNames='fa-inverse' />
    </div>
  );
}
