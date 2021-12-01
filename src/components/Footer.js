import React from 'react';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const textLink = 'hover:text-white transition duration-150 ease-in';

  return (
    <div id='footer' className='px-32 py-16 bg-footerbg text-center text-footertext'>
      <div className='text-white grid justify-items-center'>
        <MyLink to='top'>
          <UpArrow />
        </MyLink>
      </div>
      <Socials addClassNames='fa-inverse mt-16 mb-8 mx-8 social-32' />
      <div className='w-11/12 m-auto text-sm'>
        <hr className='border-footerhr' />
        <div className='pt-8 m-auto grid grid-cols-1 lg:grid-cols-3 grid-flow-row'>
          <div>
            <div>I built this portfolio from scratch</div>
            <div>with{' '}
              <A h='https://reactjs.org/' addClassNames={textLink}>React,</A>
              {' '}
              <A h='https://gatsbyjs.com/' addClassNames={textLink}>Gatsby,</A>
              {' '}and{' '}
              <A h='https://tailwindcss.com/' addClassNames={textLink}>Tailwind</A>
              .
            </div>
          </div>
          <div>
            <div>
              <A h='https://github.com/Evan-Walter/portfolio/' addClassNames={textLink}>Source Code</A>
            </div>
            <div>© {new Date().getFullYear()}{' '}
              <A h='https://github.com/Evan-Walter' addClassNames={textLink}>Evan Walter</A>
            </div>
          </div>
          <div>
            <div>Design inspired by{' '}</div>
            <div>
              <A h='https://github.com/cobidev' addClassNames={textLink}>Jacobo Martínez</A>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
