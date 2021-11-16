import React from 'react';
import MyLink from './buttons/MyLink';
import { DownArrow } from './buttons/Arrows';

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
  const classNames1 =
    (!fluidHeight && 'section ') +
    (bgColored && 'bg-gradient-to-br from-primary to-secondary text-white ');

  const classNames = () => {
    if (hasBgImgClassName) {
      return classNames1 + hasBgImgClassName;
    }
    return classNames1;
  };

  return (
    <div id={id} className={classNames()}>
      {/* {!!hasBgImgClassName && (
        <div className={'bg-img ' + hasBgImgClassName}></div>
      )} */}
      {titleShown && <h1>{titleShown}</h1>}
      {children}
      {!last && (
        <MyLink to={next}>
          <DownArrow />
        </MyLink>
      )}
    </div>
  );
}
