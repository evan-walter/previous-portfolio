import React from 'react';
import A from './A';

export default function Socials({ addClassNames }) {
  const more = 'fa cursor-pointer transform hover:-translate-y-0.5 transition duration-200 ease-in';
  const added = () => {
    if (addClassNames) {
      return more + ' ' + addClassNames;
    }
    return more;
  };

  return (
    <div className=''>
      <A h='https://github.com/Evan-Walter/'>
        <i className={'fa-github ' + added()} />
      </A>
      <A h='https://linkedin.com/in/~evanwalter/'>
        <i className={'fa-linkedin ' + added()} />
      </A>
    </div>
  );
}
