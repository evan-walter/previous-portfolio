import React from 'react';

const classNames = 'cursor-pointer'; // translate-y-3px

export function UpArrow() {
  return (
    <div className={classNames}>
      <i className='fa fa-angle-up fa-2x' />
    </div>
  );
}

export function DownArrow() {
  return (
    <div className={classNames}>
      <i className='fa fa-angle-down fa-2x' />
    </div>
  );
}
