import React from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact'];

  function handleClick() {window.location.reload();}

  return (
    <div id='home'>
      <div className='py-4 px-44 mx-auto'>
        <div className='sm:flex justify-around'>
          {/* Logo */}
          {/* <div className='text-white text-3xl font-bold p-3'>LOGO</div> */}
          <button onClick={handleClick} onKeyDown={handleClick} className='cursor-pointer'>
            <img src={logo} alt='logo' />
          </button>
          {/* Nav Links */}
          <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
            {links.map(
              (value) => {
                return (
                  <li className='sm:inline-block'>
                    <div className='p-3 transform hover:-translate-y-1 transition duration-200 ease-in'>
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
