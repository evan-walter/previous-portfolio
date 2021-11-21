import React from 'react';
import MyLink from './buttons/MyLink';
import Button from './buttons/Button';
import Socials from './buttons/Socials';

export default function Hero({ next }) {
  const text = 'text-4xl font-bold py-4 leading-relaxed';

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
          <h2 className={text}>Hi, my name is Evan Walter.</h2> {/* 'text-5xl font-bold' */}
          <h2 className={text}>
            I am a Software Engineer specializing in React.
          </h2>
          <Socials addClassNames='px-4 py-4 text-3xl' />
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            // width='590'
            // height='345'
            className=''
            title='Welcome Video'
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            src='https://www.loom.com/embed/cfb7f4e0581d48cc98a3ebb8c2ca4a06?autoplay=0'
          />
        </div>
      </div>
      <div className='pt-16 pb-2 text-center'>
      <MyLink to={next}>
        <Button textB='Know More' />
      </MyLink>
      </div>
    </div>
  );
}
