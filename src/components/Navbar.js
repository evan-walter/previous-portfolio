import React, { useState } from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact'];
  const mobileCName = expanded ? 'expanded' : '';

  const [expanded, setExpanded] = useState(false);

  function handleLogo() {
    window.location.reload();
  }

  return (
    <div id='home' class='py-4 px-8 sm:px-36 xl:px-44 flex items-center justify-between'>
      <div className=''>
        <button onClick={handleLogo} onKeyDown={handleLogo} className='cursor-pointer'>
          <img src={logo} alt='logo' />
        </button>
      </div>
      <div className='bg-gray-300'>
        <button className='text-gray-600 hover:text-gray-500 focus:text-gray-500'>
          <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
            <path d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'/>
            <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>
          </svg>
        </button>
      </div>
      <div className=''>
        <ul className=''>
          {links.map(
            (value) => {
              return (
                <li className=''>
                  <div className='transform hover:-translate-y-1 transition duration-200 ease-in'>
                    <MyLink to={value}>
                      <Button textNoB={value.charAt(0).toUpperCase() + value.slice(1)} />
                    </MyLink>
                  </div>
                </li>
              )
            }
            )}
        </ul>
      </div>
    </div>
  );
}
