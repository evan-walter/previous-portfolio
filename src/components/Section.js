import React from 'react';
import { DownArrow } from './Arrows';

export default function Section({ title, bgColored, children }) {
  const classNames = bgColored
    ? 'bg-gradient-to-br from-primary to-secondary text-white'
    : '';

  return (
    <div className={classNames}>
      <h1>{title}</h1>
      {children}
      <DownArrow />
    </div>
  );
}
