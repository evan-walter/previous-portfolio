import React from 'react';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const container = 'px-8 py-16 bg-footerbg text-center text-footertext';
  const textLinks = 'hover:text-white transition duration-150 ease-in';

  return (
    <div className={container}>
      <div className='text-white'>
        <MyLink to='top'>
          <UpArrow />
        </MyLink>
      </div>
      <Socials addClassNames='fa-inverse p-8 social-32' />
      <div className='w-11/12 m-auto text-sm'>
        <hr className='border-footertext' />
        <div className='pt-8 grid grid-cols-3'>
          <div>I built this portfolio from scratch with{' '}
            <A h='https://reactjs.org/' className={textLinks}>
              ReactJS
            </A>
            {' '}and{' '}
            <A h='https://tailwindcss.com/' className={textLinks}>
              Tailwind CSS
            </A>
            .
          </div>
          <div>
            <A h='https://github.com/Evan-Walter/portfolio/' className={textLinks}>
            Source Code
            </A>
          </div>
          <div>Design inspired by{' '}
            <A h='https://github.com/cobidev' className={textLinks}>
              Jacobo Martínez
            </A>
          </div>
        </div>
        <div>© {new Date().getFullYear()}{' '}
          <A h='https://github.com/Evan-Walter' className={textLinks}>
            Evan Walter
          </A>
        </div>
      </div>
    </div>
  );
}
