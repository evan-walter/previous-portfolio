import React from 'react';

export default function Socials({ addClassNames }) {
  const more = 'fa cursor-pointer social ';
  const added = () => {
    if (addClassNames) {
      return more + addClassNames;
    }
    return more;
  };

  return (
    <div>
      <a href='https://github.com/Evan-Walter/' target='_blank' rel='noreferrer'>
        <i className={'fa-github ' + added()} />
      </a>
      <a href='https://linkedin.com/in/~evanwalter/' target='_blank' rel='noreferrer'>
        <i className={'fa-linkedin ' + added()} />
      </a>
    </div>
  );
}
