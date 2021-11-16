import React from 'react';
import MyLink from './buttons/MyLink';
import logo from '../images/logo.png';

export default function Navbar() {
  const aboutLink = <MyLink to='about'>About</MyLink>;
  const projectsLink = <MyLink to='projects'>Projects</MyLink>;
  const testimonialsLink = <MyLink to='testimonials'>Testimonials</MyLink>;
  const contactLink = <MyLink to='contact'>Contact</MyLink>;

  const logoClassNames = 'cursor-pointer';
  const linksClassNames = 'cursor-pointer';

  return (
    <div className=''>
      <img src={logo} alt='logo' className={logoClassNames} />
      <div className={linksClassNames}>
        {aboutLink}
        {projectsLink}
        {testimonialsLink}
        {contactLink}
      </div>
    </div>
  );
}
