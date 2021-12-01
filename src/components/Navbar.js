import React from 'react';
// import Button from './buttons/Button';
// import MyLink from './buttons/MyLink';
// import logo from '../images/logo.png';

export default function Navbar() {
  function handleClick() {window.location.reload();}

  return (
    <div className='bg-indigo-700 shadow-lg'>
      <div className='container mx-auto'>
        <div className='sm:flex justify-around'>
          {/* Site Title */}
          <div className='text-white text-3xl font-bold p-3'>WEB ZONE</div>
          {/* Menu Items */}
          <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
            <li className='sm:inline-block'>
              <a className='p-3 hover:text-white' href='#'>Home</a>
            </li>
            <li className='sm:inline-block'>
              <a className='p-3 hover:text-white' href='#'>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
