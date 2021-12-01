import React from 'react';

export default function A({ h, addClassName, children }) {
  return <a href={h} target='_blank' rel='noreferrer' className={addClassName}>{children}</a>;
}
