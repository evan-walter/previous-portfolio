import React from 'react';
import Button from './buttons/Button';
import MyLink from './buttons/MyLink';

export default function NavProjs() {
  const link = 'py-4 transform hover:translate-x-1 transition duration-200 ease-in focus:outline-none ';

  return (
    <div className='nav-projs pb-1 text-center lg:text-left border border-gray-300 shadow-xl bg-white'>
      <div className='pt-2 pb-1 px-2 lg:pr-8 lg:pl-4 border-b border-gray-300'>
        <div className={link}>
          <MyLink to='projects'>
            <Button text='All' NoBg />
          </MyLink>
        </div>
      </div>
      <div className='pt-2 px-4 lg:pr-8 pb-1 pl-4'>
        <div className={link}>
          <MyLink to='react'>
            <Button text='HeyFIO (React)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='shopify'>
            <Button text='Syna Jewels (Web Dev & Shopify)' NoBg />
          </MyLink>
        </div>
        <div className={link}>
          <MyLink to='villain'>
            <Button text='Villain Codes (Web Dev & Shopify)' NoBg />
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
          <MyLink to='js'>
            <Button text='Wine Pairing App (Vanilla JS)' NoBg />
          </MyLink>
        </div>
      </div>
    </div>
  );
}
