import React from 'react';

export default function Socials({ addClassNames }) {
  const more = 'fa cursor-pointer social ';
  const added = () => {
    if (addClassNames) {
      return addClassNames;
    }
    return '';
  };

  return (
    <div>
      <a href='https://github.com/Evan-Walter/' target='_blank'>
        <i className={'fa-github ' + more + added()} />
      </a>
      <a href='https://linkedin.com/in/~evanwalter/' target='_blank'>
        <i className={'fa-linkedin ' + more + added()} />
      </a>
    </div>
  );
}
