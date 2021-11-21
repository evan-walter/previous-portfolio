import React from 'react';

export default function Button({ textB, textNoB, addClassNames, children }) {
  const textBCName = 'p-4 box-border h-8 w-max border-2 bg-gradient-to-r hover:from-primary hover:to-secondary';
  const textNoBCName =
    'font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';

  return (
    <div className='cursor-pointer'>
      {textB && <button className={addClassNames + ' ' + textBCName}>{textB}</button>}
      {textNoB && <button className={addClassNames + textNoBCName}>{textNoB}</button>}
    </div>
  );
}

/*
<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
  Hello, world!
</h1>
*/
