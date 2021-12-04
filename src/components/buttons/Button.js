import React from 'react';
import { send } from 'emailjs-com';
import Button from '../buttons/Button';

export default function Button({ textB, textNoB, addClassName }) {
  const btnBBase = 'py-2 px-5 font-bold cursor-pointer inline-block relative leading-none z-10 ';
  const btnBDefaultSize = 'text-2xl';
  const btnNoB = 'font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ';
  
  const more = function() {
    return addClassName ? addClassName : (textB ? btnBDefaultSize : '');
  }

  return (
    <div>
      {textB ? <button className={btnBBase + 'btn-b ' + more()}>{textB}</button> : ''}
      {textNoB ? <button className={btnNoB + more()}>{textNoB}</button> : ''}
    </div>
  );
}
