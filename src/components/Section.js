import React from 'react';
import Fade from './Fade';
import MyLink from './buttons/MyLink';
import { DownArrow } from './buttons/Arrows';

export default function Section({
  id,
  next,
  last,
  titleShown,
  titleGradient,
  bgColored,
  children,
}) {
  
  const containerCName = 'px-8 py-16 sm:px-36 xl:px-44 grid grid-cols-1 self-center ' +
    (bgColored ? 'bg-gradient-to-br from-primary to-secondarybg text-white ' : null);

  const tBaseCName = 'pb-8 lg:pb-12 text-3xl lg:text-4xl font-bold text-center ';
  const tGradientCName = 'text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-secondary';
  
  return (
    <section id={id} className={containerCName}>
      <Fade from='bottom'>
        <div className={tBaseCName + (titleGradient ? tGradientCName : '')}>
          {titleShown}
        </div>
      </Fade>
      {children}
      {!last ? (
        <div className='pt-8 grid justify-items-center'>
          <MyLink to={next}>
            <DownArrow />
          </MyLink>
        </div>
      ) : null}
    </section>
  );
}
