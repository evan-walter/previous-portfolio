import React from 'react';

export default function Button({ textB, textNoB, addClassNames }) {
  const textNoBCName = 'font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';
  
  function more() {return addClassNames ? addClassNames : ''}

  return (
    <div>
      {textB && <button className={'btn ' + more}>{textB}</button>}
      {textNoB && <button className={textNoBCName + ' ' + more}>{textNoB}</button>}
    </div>
  );
}
