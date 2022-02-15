import React from 'react';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const text = 'pb-0.5'
  const textLink = 'hover:text-white transition duration-150 ease-in';

  return (
    <div id='footer' className='px-8 py-16 text-center sm:px-36 xl:px-32 bg-footerbg text-footertext'>
      <div className='grid text-white justify-items-center'>
        <MyLink to='top'>
          <UpArrow />
        </MyLink>
      </div>
      <Socials addClassName='fa-inverse mt-16 mb-8 mx-8 social-32' />
      <div className='w-11/12 m-auto text-sm'>
        <hr className='border-footerhr' />
        <div className='grid grid-flow-row grid-cols-1 pt-8 m-auto lg:grid-cols-3'>
          <div>
            <div className={text}>I built this portfolio from scratch</div>
            <div className={text}>with{' '}
              <A h='https://reactjs.org/' addClassName={textLink}>React,</A>
              {' '}
              <A h='https://gatsbyjs.com/' addClassName={textLink}>Gatsby,</A>
              {' '}and{' '}
              <A h='https://tailwindcss.com/' addClassName={textLink}>Tailwind</A>
              .
            </div>
          </div>
          <div>
            <div className={text}>
              <A h='https://github.com/Evan-Walter/portfolio/' addClassName={textLink}>Source Code</A>
            </div>
            <div className={text}>© {new Date().getFullYear()}{' '}
              <A h='https://github.com/Evan-Walter' addClassName={textLink}>Evan Walter</A>
            </div>
          </div>
          <div>
            <div className={text}>Design inspired by{' '}</div>
            <div className={text}>
              <A h='https://github.com/cobiwave' addClassName={textLink}>Jacobo Martínez</A>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
