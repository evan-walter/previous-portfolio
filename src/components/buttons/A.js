import React from 'react';

export default function A({ h, children }) {
  return <a href={h} target='_blank' rel='noreferrer'>{children}</a>;
}
