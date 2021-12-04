import React from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';

export default function NavProjects() {
  const link = 'py-2 transform hover:translate-x-1 transition duration-200 ease-in focus:outline-none ';

  return (
    <div className='text-center lg:text-left border border-gray-300 bg-white'>
      <div className='py-2 pl-4 pr-8 border-b border-gray-300'>
        <div className={link}>
          <MyLink to='projects'>
            <Button textNoB='All' />
          </MyLink>
        </div>
      </div>
      <div className='pt-2 pr-8 pb-1 pl-4'>
        <div className={link}>
          <MyLink to='heyfio'>
            <Button textNoB='HeyFIO' />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='confco'>
            <Button textNoB='The Confidence Co' />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='w3sales'>
            <Button textNoB='W3 Sales' />
          </MyLink>
        </div>
      </div>
    </div>
  );
}
