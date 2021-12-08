import React from 'react';
import A from './A';

export default function Socials({ addClassName }) {
  const more =
    'fa cursor-pointer transform hover:-translate-y-1 transition duration-200 ease-in ' +
    (addClassName ? addClassName : '');

  return (
    <div>
      <A h='https://github.com/Evan-Walter/'>
        <i className={'i-ctl fa-github ' + more} />
      </A>
      <A h='https://linkedin.com/in/~evanwalter/'>
        <i className={'i-ctl fa-linkedin ' + more} />
      </A>
    </div>
  );
}
