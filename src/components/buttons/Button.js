import React from 'react';

export default function Button({ textB, textNoB, addClassNames }) {
  // const base = 'font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ';
  // const bBase = base + 'p-4 m-auto h-8 w-max flex items-center btn ';
  // const textBCName = bBase;
  // const textNoBCName = base;
  const textNoBCName = 'font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ';

  return (
    <div>
      {textB && <button className={'btn ' + (addClassNames ? addClassNames : '')}>{textB}</button>}
      {textNoB && <button className={textNoBCName + ' ' + (addClassNames ? addClassNames : '')}>{textNoB}</button>}
    </div>
  );
}
