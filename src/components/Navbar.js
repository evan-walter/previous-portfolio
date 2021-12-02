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
    <div id='home' class='py-4 px-8 sm:px-36 xl:px-44'>
      <div className='flex'>
        <div class='flex-none'>
          <button onClick={handleLogo} onKeyDown={handleLogo} className='cursor-pointer'>
            <img src={logo} alt='logo' />
          </button>
        </div>
        <div class='flex-grow'></div>
        <div class='flex-none'>
          <ul className=''> {/* hidden lg:visible m-auto grid grid-cols-1 lg:grid-cols-3 grid-flow-row */}
            {links.map(
              (value) => {
                return (
                  <li className='inline-block'> {/* lg:inline-block */}
                    <div className='p-3'> {/* transform hover:-translate-y-1 transition duration-200 ease-in */}
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
    </div>
  );
}
