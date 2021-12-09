import React, { useState } from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import NavProjs from './NavProjs';
import logo from '../images/logo.png';

export default function Navbar() {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact'];
  
  const [barsExpanded, setBarsExpanded] = useState(false);
  const [projsExpanded, setProjsExpanded] = useState(false);
  
  function handleLogo() {
    window.location.reload();
  }
  
  function handleBars() {
    setBarsExpanded(s => !s);
  }
  
  function handleShowProjs() {
    setProjsExpanded(s => !s);
  }
  
  return (
    <header id='home' className='text-lg lg:flex lg:justify-between py-4 px-8 sm:px-36 xl:px-44 border-b shadow-lg'>
      {/* <div className={projsExpanded ? 'absolute' : 'hidden'} onClick={handleShowProjs}>
        <div className='z-40 w-screen h-screen fixed inset-0 top-0 bg-transparent'></div>
      </div> */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <button onClick={handleLogo} onKeyDown={handleLogo} className='cursor-pointer'>
            <img src={logo} alt='logo' />
          </button>
        </div>
        <div className='lg:hidden'>
          <button 
            className='text-gray-600'
            onClick={handleBars}
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path className={(barsExpanded ? 'block' : 'hidden')} d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'/>
              <path className={(barsExpanded ? 'hidden' : 'block')} d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>
            </svg>
          </button>
        </div>
      </div>
      <div className={barsExpanded ? 'my-4 border-t border-gray-300' : 'hidden'}></div>
      <ul className={barsExpanded ? 'block pb-4' : 'hidden lg:flex lg:items-center'}>
        {links.map(
          (value) => {
            return (
              <li className='block p-2 m-2 cursor-pointer' key={value}>
                {(value === 'projects') ?
                  <div>
                    <div onClick={handleShowProjs} className='flex items-center justify-center transform hover:-translate-y-1 transition duration-200 ease-in'>
                      <i className={'text-center w-4 pr-1 fa fa-caret-' + (projsExpanded ? 'down' : 'right') + ' text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary focus:outline-none'} aria-hidden='true' />
                      <Button textNoB={value.charAt(0).toUpperCase() + value.slice(1)} />
                    </div>
                    <div className={'pt-2 m-auto w-max lg:absolute z-50 ' + (projsExpanded ? 'block' : 'hidden')}>
                      <NavProjs />
                    </div>
                  </div> :
                  <div className='text-center transform hover:-translate-y-1 transition duration-200 ease-in focus:outline-none'>
                    <MyLink to={value}>
                      <Button textNoB={value.charAt(0).toUpperCase() + value.slice(1)} />
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
