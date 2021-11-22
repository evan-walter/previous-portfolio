import React from 'react';

export default function A({ h, addClassNames, children }) {
  return <a href={h} target='_blank' rel='noreferrer' className={addClassNames}>{children}</a>;
}
