import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

export default function Navbar() {
  const aboutLink = <Link to='about' smooth duration={850}>About</Link>;
  const projectsLink = <Link to='projects' smooth duration={850}>Projects</Link>;
  const testimonialsLink = <Link to='testimonials' smooth duration={850}>Testimonials</Link>;
  const contactLink = <Link to='contact' smooth duration={850}>Contact</Link>;

  const logoClassNames = 'cursor-pointer'
  const linksClassNames = 'cursor-pointer';

  return (
    <div className=''>
      <img src={logo} className={logoClassNames} />
      <div className={linksClassNames}>
        {aboutLink}
        {projectsLink}
        {testimonialsLink}
        {contactLink}
      </div>
    </div>
  );
}
