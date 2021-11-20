import React from 'react';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const logoClassNames = 'cursor-pointer';
  const linkClassNames = 'py-2 px-4 transform hover:-translate-y-1 transition duration-200 ease-in'; // w-min
  const linksClassNames = 'flex text-center items-center justify-end cursor-pointer';

  const homeLink = <div className={linkClassNames}>Home</div>
  const aboutLink = <MyLink to='about'><div className={linkClassNames}>About</div></MyLink>;
  const projectsLink = <MyLink to='projects'><div className={linkClassNames}>Projects</div></MyLink>;
  const testimonialsLink = <MyLink to='testimonials'><div className={linkClassNames}>Testimonials</div></MyLink>;
  const contactLink = <MyLink to='contact'><div className={linkClassNames}>Contact</div></MyLink>;

  return (
    <div className='px-44 py-4 grid grid-cols-2 text-right'>
      <img src={logo} alt='logo' className={logoClassNames} onClick={function() {window.location.reload()}} />
      <div className={linksClassNames}>
        {homeLink}
        {aboutLink}
        {projectsLink}
        {testimonialsLink}
        {contactLink}
      </div>
    </div>
  );
}
