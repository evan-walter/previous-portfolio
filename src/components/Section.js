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
  hasBgImgClassName,
  fluidHeight,
  children,
}) {
  const titleCtl = 'text-4xl font-bold text-center pb-12';
  const gradient = ' text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'

  const containerStart =
    'px-8 py-16 sm:px-36 xl:px-44 grid grid-cols-1 self-center ' +
    (!fluidHeight ? 'section ' : '') +
    (bgColored ? 'bg-gradient-to-br from-primary to-secondary text-white' : '');

  const container = () => {
    if (hasBgImgClassName) {
      return containerStart + hasBgImgClassName;
    }
    return containerStart;
  };

  return (
    <div id={id} className={container()}>
      {/* {!!hasBgImgClassName && (
        <div className={'bg-img ' + hasBgImgClassName}></div>
      )} */}
      {titleShown && titleGradient && <div className={titleCtl + gradient}>{titleShown}</div>}
      {titleShown && !titleGradient && <div className={titleCtl}>{titleShown}</div>}
      {children}
      {!last && (
        <div className='pt-8 grid justify-items-center'>
          <MyLink to={next}>
            <DownArrow />
          </MyLink>
        </div>
      )}
    </div>
  );
}
