import React from 'react';

const container =
  'w-6 h-6 text-lg cursor-pointer animate-bounce'; // transform hover:-translate-y-1 transition duration-200 ease-in 
const iClassNames = 'fa fa-2x fa-angle-';
// py-4 w-6 h-6 text-lg grid justify-items-center cursor-pointer animate-bounce
// text-lg cursor-pointer animate-bounce w-6 h-6
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
