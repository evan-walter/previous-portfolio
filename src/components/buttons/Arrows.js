import React from 'react';

const baseWrap = 'w-6 h-6 text-lg cursor-pointer'; // transform hover:-translate-y-1 transition duration-200 ease-in 
const iCNames = 'fa fa-2x fa-angle-';
// py-4 w-6 h-6 text-lg grid justify-items-center cursor-pointer animate-bounce
// text-lg cursor-pointer animate-bounce w-6 h-6
export function UpArrow() {
  return (
    <div className={baseWrap + ' transform hover:-translate-y-1 transition duration-200 ease-in'}>
      <i className={iCNames + 'up'} />
    </div>
  );
}

export function DownArrow() {
  return (
    <div className={baseWrap + ' animate-bounce'}>
      <i className={iCNames + 'down'} />
    </div>
  );
}
