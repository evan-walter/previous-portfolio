import React from 'react';

export default function Button({ filled, text }) {


  return (
    <div className='cursor-pointer'>
      <div>{text}</div>
    </div>
  );
}
