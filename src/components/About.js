import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from './Fade';

export default function About() {
  const p = 'py-2 md:text-lg lg:text-xl text-center lg:text-left';

  return (
    <div className='grid grid-cols-1 gap-12 justify-items-center lg:grid-cols-2 lg:gap-32 lg:justify-items-end'>
      <Fade from='left'>
        <div>
          {/* <img src={aboutImg} alt='about' width='350' /> */}
          <StaticImage src='../images/ewalter-11-700.jpg' alt='about-image' width={350} />
        </div>
      </Fade>
      <Fade from='right'>
        <div className='self-center'>
          <p className={p}>
            I am a Software Engineer specializing in React. I love what I do. I
            care for the people I work with and focus on real business results.
          </p>
          <p className={p}>
            Prior to Software Engineering, I obtained a Bachelor's of Science in Electrical
            Engineering and began a career in the field. As I explored the
            software side of the field, I applied communication and problem
            solving skills I learned along the way.
          </p>
          <p className={p}>
            As I learned the tools and built personal projects, I found
            opportunities to serve clients. I recently served as a Contract Full
            Stack Software Engineer and previously as a Shopify Developer. I am
            excited to continue to leverage and grow my skills in a new full time
            role.
          </p>
        </div>
      </Fade>
    </div>
  );
}
