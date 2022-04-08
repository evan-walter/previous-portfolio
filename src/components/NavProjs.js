import React from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';

export default function NavProjs() {
  const link = 'py-4 transform hover:translate-x-1 transition duration-200 ease-in focus:outline-none ';

  return (
    <div className='pb-1 text-center bg-white border border-gray-300 shadow-xl nav-projs lg:text-left'>
      <div className='px-2 pt-2 pb-1 border-b border-gray-300 lg:pr-8 lg:pl-4'>
        <div className={link}>
          <MyLink to='projects'>
            <Button text='All' NoBg />
          </MyLink>
        </div>
      </div>
      <div className='px-4 pt-2 pb-1 pl-4 lg:pr-8'>
        <div className={link}>
          <MyLink to='ghostbed'>
            <Button text='GhostBed (Full Stack with React)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='heyfio'>
            <Button text='HeyFIO (Full Stack with React)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='syna'>
            <Button text='Syna Jewels (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='seafoods'>
            <Button text='Global Seafoods (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='confco'>
            <Button text='The Confidence Co (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='w3sales'>
            <Button text='W3 Sales (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='villain'>
            <Button text='Villain Codes (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='wine'>
            <Button text='Wine Pairing App (Vanilla JS)' NoBg />
          </MyLink>
        </div>
      </div>
    </div>
  );
}
