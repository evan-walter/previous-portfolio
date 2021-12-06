import React from 'react';

export default function Button({ textB, textNoB, noCursorPointer, addClassName }) {
  const btnBBase = 'font-bold inline-block relative leading-none z-10 ';
  const btnBDefaultSize = 'py-1 px-4 text-lg lg:text-xl ';
  const btnNoB = 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ';
  
  const more = function() {
    return (
      (addClassName ?
        addClassName :
        (textB ? btnBDefaultSize : null)
      )
    );
  }

  return (
    <div>
      {textB ? <button className={btnBBase + 'btn-b ' + more()}>{textB}</button> : null}
      {textNoB ? <button className={btnNoB + more()}>{textNoB}</button> : null}
    </div>
  );
}
