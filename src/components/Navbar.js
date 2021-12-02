import React, { useState } from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact'];
  const carot = <i className={'fa fa-caret-' + projsExpanded ? 'down' : 'right'} aria-hidden='true' />;

  const [barsExpanded, setBarsExpanded] = useState(false);
  const [projsExpanded, setProjsExpanded] = useState(false);

  function handleLogo() {
    window.location.reload();
  }

  function handleBars() {
    setBarsExpanded(s => !s);
  }

  function handleProjects() {
    setProjsExpanded(s => !s);
  }

  return (
    <header id='home' class='text-lg lg:flex lg:justify-between py-2 px-8 sm:px-36 xl:px-44'>
      <div class='flex items-center justify-between'>
        <div className=''>
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
      <ul className={'focus:outline-none ' + (barsExpanded ? 'block pb-4' : 'hidden lg:flex lg:items-center') }>
        {links.map(
          (value) => {
            return (
              <li className=''>
                <div className='block text-center p-2 m-2 transform hover:-translate-y-1 transition duration-200 ease-in'>
                  {(value === 'projects') &&
                    {carot} + <Button textNoB={value.charAt(0).toUpperCase() + value.slice(1)} />
                  }
                  <MyLink to={value}>
                    <Button textNoB={value.charAt(0).toUpperCase() + value.slice(1)} />
                  </MyLink>
                </div>
              </li>
            )
          }
          )}
      </ul>
    </header>
  );
}
