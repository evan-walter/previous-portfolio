import React from 'react';

const container =
  'text-lg cursor-pointer transform hover:-translate-y-1 transition duration-200 ease-in';
const iClassNames = 'fa fa-2x fa-angle-'; // transform translate-y-3px

export function UpArrow() {
  return (
    <div className={container}>
      <i className={iClassNames + 'up'} />
    </div>
  );
}

export function DownArrow() {
  return (
    <div className={container}>
      <i className={iClassNames + 'down'} />
    </div>
  );
}
