import React from 'react';

export default function Socials({ addClassNames }) {
  const more = 'fa p-8 social cursor-pointer transform hover:-translate-y-0.5 transition duration-200 ease-in ';
  const added = () => {
    if (addClassNames) {
      return more + addClassNames;
    }
    return more;
  };

  return (
    <div className=''>
      <a href='https://github.com/Evan-Walter/' target='_blank' rel='noreferrer'>
        <i className={'fa-github ' + added()} />
      </a>
      <a href='https://linkedin.com/in/~evanwalter/' target='_blank' rel='noreferrer'>
        <i className={'fa-linkedin ' + added()} />
      </a>
    </div>
  );
}
