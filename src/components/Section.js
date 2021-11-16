import React, { useState } from 'react';
import { DownArrow } from './Arrows';

export default function Section({
  titleShown,
  bgColored,
  hasBgImgClassName,
  children,
  }) {
  const classNames =
    'section ' +
    (bgColored && 'bg-gradient-to-br from-primary to-secondary text-white ');

  return (
    <div className={classNames}>
      {/* {!!hasBgImgClassName && (
        <div className={'bg-img ' + hasBgImgClassName}></div>
      )} */}
      {titleShown && <h1>{titleShown}</h1>}
      {children}
      <DownArrow />
    </div>
  );
}
