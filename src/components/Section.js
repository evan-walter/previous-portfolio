import React from 'react';
import { DownArrow } from './Arrows';

export default function Section({ title, bgColored, children }) {
  return (
    <div className={bgColored ? 'bg-blue-500' : ''}>
      <h1>{title}</h1>
      {children}
      <DownArrow />
    </div>
  );
}
