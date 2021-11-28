import React from 'react';

export default function Button({ textB, textNoB, addClassNames }) {
  const base = 'cursor-pointer '
  const textBCName = base + 'p-4 box-border h-8 w-max border-2 bg-gradient-to-r hover:from-primary hover:to-secondary';
  const textNoBCName = base + 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';

  return (
    <div>
      {textB && <button className={textBCName + ' ' + (addClassNames ? addClassNames : '')}>
        <div className='grid'>{textB}</div>
      </button>}
      {textNoB && <button className={textNoBCName + ' ' + (addClassNames ? addClassNames : '')}>{textNoB}</button>}
    </div>
  );
}

/*
<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
  Hello, world!
</h1>
*/
