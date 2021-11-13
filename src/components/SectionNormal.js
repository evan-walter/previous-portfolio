import React from 'react';
import { DownArrow } from './Arrows';

export default function SectionNormal({ title, bgColored, children }) {
  const classNames =
    'section ' +
    (bgColored ? 'bg-gradient-to-br from-primary to-secondary text-white' : '');

  return (
    <div className={classNames}>
      <h1>{title}</h1>
      {children}
      <DownArrow />
    </div>
  );
}
