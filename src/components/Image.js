import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import aboutImg from '../images/ewalter-11-700.jpg';

export default function Image({ src, alt, maxWidth }) {
  return <div><StaticImage src={aboutImg} alt={alt} width={maxWidth} /></div>;
}
