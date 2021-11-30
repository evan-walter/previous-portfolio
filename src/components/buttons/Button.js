import React from 'react';

export default function Button({ textB, textNoB, addClassNames, children }) {
  const btnBBase = 'font-bold cursor-pointer inline-block relative leading-none z-10 ';
  const btnBDefaultSize = 'py-2 px-5 text-2xl';
  const btnNoB = 'font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ';
  
  const more = function() {
    return addClassNames ? addClassNames : (textB ? btnBDefaultSize : '');
  }

  return (
    <div>
      {textB && <button className={'btn-b ' + btnBBase + more()}>{children ? children : textB}</button>}
      {textNoB && <button className={btnNoB + more()}>{textNoB}</button>}
    </div>
  );
}
