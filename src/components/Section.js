import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { DownArrow } from './Arrows';

export default function Section({
  id,
  next,
  last,
  titleShown,
  bgColored,
  hasBgImgClassName,
  fluidHeight,
  children,
}) {
  const classNames =
    (!fluidHeight && 'section ') +
    (bgColored && 'bg-gradient-to-br from-primary to-secondary text-white ');

  return (
    <div id={id} className={classNames}>
      {/* {!!hasBgImgClassName && (
        <div className={'bg-img ' + hasBgImgClassName}></div>
      )} */}
      {titleShown && <h1>{titleShown}</h1>}
      {children}
      {!last && (
        <Link to={next} smooth duration={850}>
          <DownArrow />
        </Link>
      )}
    </div>
  );
}
