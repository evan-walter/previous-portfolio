import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from './Fade';
import A from './buttons/A';
import Button from './buttons/Button';
import resume from '../assets/resume.pdf';

export default function About() {
  const p = 'py-2 md:text-lg lg:text-xl text-center lg:text-left';

  return (
    <div className='grid grid-cols-1 gap-12 justify-items-center lg:grid-cols-2 lg:gap-32 lg:justify-items-end'>
      <Fade from='left'>
        <div>
          <StaticImage
            src='../assets/images/ewalter-11-700.jpg'
            alt='about-image'
            width={350}
          />
        </div>
      </Fade>
      <Fade from='right'>
        <div className='self-center'>
          <p className={p}>
            I am a Software Engineer specializing in React. With over 10 years
            of experience delivering technical solutions, I bring real business
            value in a timely manner.
          </p>
          <p className={p}>
            With experience managing technical projects, I leverage leadership
            skills to serve teams with Full Stack, Front End, and React
            solutions. I recently served as a Contract Full Stack Software
            Engineer and previously as a Web Developer and Shopify Developer. I
            am excited to grow my skills in a new, full time, Software
            Engineering role.
          </p>
          <div className='mt-4 text-center lg:text-left'>
            <A h={resume}>
              <Button text='Resume' BgS />
            </A>
          </div>
        </div>
      </Fade>
    </div>
  );
}
