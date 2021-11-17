import React from 'react';
import aboutImg from '../images/ewalter-11-700.jpg';

export default function About() {
  return (
    <div className='grid grid-cols-2'>
      <div>
        <img src={aboutImg} alt='about' width='350' />
      </div>
      <p>
        Software Engineer specializing in React. I love what I do. I care for
        the people I work with and focus on real business results. Former
        Electrical Engineer learning to apply leadership and technical skills to
        serve on a team.
      </p>
    </div>
  );
}
