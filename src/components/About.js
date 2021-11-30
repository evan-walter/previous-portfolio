import React from 'react';
import aboutImg from '../images/ewalter-11-700.jpg';

export default function About() {
  const p = 'py-2 text-xl text-center lg:text-left';

  return (
    <div className='grid grid-cols-1 gap-12 justify-items-center lg:grid-cols-2 lg:gap-32 lg:justify-items-end'>
      <div>
        <img src={aboutImg} alt='about' width='350' />
      </div>
      <div className='self-center'>
        <p className={p}>
          I am a Software Engineer specializing in React. I love what I do. I
          care for the people I work with and focus on real business results.
        </p>
        <p className={p}>
          Prior to development, I obtained a Bachelor's of Science in Electrical
          Engineering and began a career in the field. As I explored the
          software side of the field, I applied communication and problem
          solving skills I learned along the way. I am excited to continue
          growing and applying these skills to serve on a team.
        </p>
      </div>
    </div>
  );
}
