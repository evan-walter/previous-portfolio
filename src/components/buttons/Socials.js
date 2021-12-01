import React from 'react';
import A from './A';

export default function Socials({ addClassName }) {
  const more = 'fa cursor-pointer transform hover:-translate-y-0.5 transition duration-200 ease-in ';
  const added = () => {
    if (addClassName) {
      return more + addClassName;
    }
    return more;
  };

  return (
    <div className=''>
      <A h='https://github.com/Evan-Walter/'>
        <i className={'i-ctl fa-github ' + added()} />
      </A>
      <A h='https://linkedin.com/in/~evanwalter/'>
        <i className={'i-ctl fa-linkedin ' + added()} />
      </A>
    </div>
  );
}
