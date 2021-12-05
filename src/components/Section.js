import React from 'react';
import MyLink from './buttons/MyLink';
import { DownArrow } from './buttons/Arrows';

export default function Section({
  id,
  next,
  last,
  titleShown,
  titleGradient,
  bgColored,
  bgImg,
  children,
}) {
  
  const containerCName = 'section px-8 py-16 sm:px-36 xl:px-44 grid grid-cols-1 self-center ' +
    (bgImg ? 'bg-fixed' : '') +
    (bgColored ? 'bg-gradient-to-br from-primary to-secondary text-white ' : '');

  const containerStyle = bgImg ? { backgroundImage : `url(../images/${bgImg})` } : {};

  const tBaseCName = 'pb-8 lg:pb-12 text-3xl lg:text-4xl font-bold text-center';
  const tGradientCName = ' text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';

  const titleCName = titleShown ? tBaseCName : 
    (titleGradient ? (tBaseCName + tGradientCName) : '');
  
  return (
    <div id={id} className={containerCName} style={containerStyle}>
      <div className={titleCName}>
        {titleShown}
      </div>
      {children}
      {!last ? (
        <div className='pt-8 grid justify-items-center'>
          <MyLink to={next}>
            <DownArrow />
          </MyLink>
        </div>
      ) : ''}
    </div>
  );
}
