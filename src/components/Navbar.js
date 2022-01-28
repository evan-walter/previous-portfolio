import React, { useState } from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import NavProjs from './NavProjs';
import Socials from './buttons/Socials';
import logo from '../assets/images/logo.png';

export default function Navbar({ projsExpanded, handleProjs }) {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact', 'socials'];
  
  const [barsExpanded, setBarsExpanded] = useState(false);
  
  function handleBars() {
    setBarsExpanded(s => !s);
  }
  
  return (
    <header id='home' className='text-lg lg:flex lg:justify-between py-4 px-8 sm:pl-36 xl:pl-44 border-b shadow-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <a href='https://evanwalter.dev'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='lg:hidden'>
          <button 
            className='text-gray-600'
            onClick={handleBars}
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              {barsExpanded ? <path d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'/> :
                <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>}
            </svg>
          </button>
        </div>
      </div>
      <div className={barsExpanded ? 'my-4 border-t border-gray-300' : 'hidden'}></div>
      <ul className={barsExpanded ? 'block pb-4' : 'hidden lg:flex lg:items-center'}>
        {links.map(
          (value) => {
            return (
              <li className='block py-2 my-2 lg:px-2 lg:mx-2 cursor-pointer' key={value}>
                {(value === 'projects') ?
                  <div>
                    <div onClick={handleProjs} className='flex items-center justify-center transform hover:-translate-y-1 transition duration-200 ease-in'>
                      <i className={'text-center w-4 pr-1 fa fa-caret-' + (projsExpanded ? 'down' : 'right') + ' text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-secondary focus:outline-none'} aria-hidden='true' />
                      <Button text={value.charAt(0).toUpperCase() + value.slice(1)} NoBg />
                    </div>
                    <div className={'pt-2 m-auto w-max lg:absolute z-50 ' + (projsExpanded ? 'block' : 'hidden')}>
                      <NavProjs />
                    </div>
                  </div> : (value === 'socials') ?
                  <div className='text-center'>
                    <Socials addClassName='mx-4 text-2xl' /> 
                    {/* mx-4 my-4 text-3xl */}
                  </div> :
                  <div className='text-center transform hover:-translate-y-1 transition duration-200 ease-in focus:outline-none'>
                    <MyLink to={value}>
                      <Button text={value.charAt(0).toUpperCase() + value.slice(1)} NoBg />
                    </MyLink>
                  </div>
                }
              </li>
            )
          }
        )}
      </ul>
    </header>
  );
}
