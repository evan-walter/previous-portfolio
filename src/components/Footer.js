import React from 'react';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const container = 'p-8 bg-footerbg text-center text-footertext';
  const textLinks = 'hover:text-white transition duration-150 ease-in';

  return (
    <div className={container}>
      <div className='text-white'>
        <MyLink to='top'>
          <UpArrow />
        </MyLink>
      </div>
      <Socials addClassNames='fa-inverse' />
      <hr className='border-footertext' />
      <div className='grid grid-cols-3'>
        <div>I built this portfolio from scratch with{' '}
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer' className={textLinks}>
            ReactJS
          </a>
          {' '}and{' '}
          <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer' className={textLinks}>
            Tailwind CSS
          </a>
        </div>
        <div>
          <a href='https://github.com/Evan-Walter/portfolio/' target='_blank' rel='noreferrer' className={textLinks}>
          Source Code
          </a>
        </div>
        <div>Design inspired by{' '}
          <a href='https://github.com/cobidev' target='_blank' rel='noreferrer' className={textLinks}>
            Jacobo Martínez
          </a>
        </div>
      </div>
        <div className='text-center'>© {new Date().getFullYear()}{' '}
          <a href='https://github.com/Evan-Walter' target='_blank' rel='noreferrer' className={textLinks}>
            Evan Walter
          </a>
        </div>
    </div>
  );
}
