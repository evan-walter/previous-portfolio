import React from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const links = ['home', 'about', 'projects', 'testimonials', 'contact'];

  function handleClick() {window.location.reload();}

  return (
    <div id='home' class='flex container-my-nav py-4 px-8 sm:px-36 xl:px-44'>
      <div class='one'>
        <button onClick={handleClick} onKeyDown={handleClick} className='one cursor-pointer'>
          <img src={logo} alt='logo' />
        </button>
      </div>
      <div class='two text-lg'>
        <ul>
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

      {/* <div className='py-4 px-8 sm:px-36 xl:px-44 mx-auto flex flex-wrap'>
        <button onClick={handleClick} onKeyDown={handleClick} className='one cursor-pointer'>
          <img src={logo} alt='logo' />
        </button>
        <div className='two'>
          <ul>
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
      </div> */}

    </div>
  );
}

/* <button onClick={handleClick} onKeyDown={handleClick} className='one cursor-pointer'><img src={logo} alt='logo' /></button>
    //       
    //     </button> */