import React from 'react';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import { UpArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Footer() {
  const container = 'px-32 py-16 bg-footerbg text-center text-footertext';
  const textLink = 'hover:text-white transition duration-150 ease-in';

  return (
    <div className={container}>
      <div className='text-white grid justify-items-center'>
        <MyLink to='top'>
          <UpArrow />
        </MyLink>
      </div>
      <Socials addClassNames='fa-inverse pt-16 pb-8 px-8 social-32' />
      <div className='w-11/12 m-auto text-sm'>
        <hr className='border-footerhr' />
        <div className='pt-8 m-auto grid grid-cols-3 grid-flow-row'> {/* grid-flow-col */}
          <div>
            <div>I built this website from scratch</div>
            <div>with{' '}
              <A h='https://reactjs.org/' className={textLink}>ReactJS</A>
              {' '}and{' '}
              <A h='https://tailwindcss.com/' className={textLink}>Tailwind CSS</A>
              .
            </div>
          </div>
          <div>
            <div>
              <A h='https://github.com/Evan-Walter/portfolio/' className={textLink}>Source Code</A>
            </div>
            <div>© {new Date().getFullYear()}{' '}
              <A h='https://github.com/Evan-Walter' className={textLink}>Evan Walter</A>
            </div>
          </div>
          <div>
            <div>Design inspired by{' '}</div>
            <div>
              <A h='https://github.com/cobidev' className={textLink}>Jacobo Martínez</A>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
