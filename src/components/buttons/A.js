import React from 'react';

export default function A({ h, className, children }) {
  return <a href={h} target='_blank' rel='noreferrer' className={className}>{children}</a>;
}
