import React from 'react';
import MyLink from './buttons/MyLink';
import Button from './buttons/Button';
import Socials from './buttons/Socials';

export default function Hero({ next }) {
  const text = 'text-xl sm:text-3xl lg:text-4xl text-center lg:text-left font-bold py-4 leading-relaxed';
  // const name = 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'> {/* justify-self-center lg:justify-self-start */}
        <div className='text-center lg:text-left'>
          <h2 className={text + ' '}>Hi, my name is Evan Walter.</h2> {/* 'text-5xl font-bold' */} {/* <h2 className={text + ' '}>Hi, my name is <span className={name}>Evan Walter</span>.</h2> */}
          <h2 className={text}>
            I am a Software Engineer specializing in React.
          </h2>
          <Socials addClassNames='mx-4 my-4 text-3xl' />
        </div>
        <div>
          <iframe
            width='560'
            height='315'
            // width='590'
            // height='345'
            className='hero-vid m-auto'
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
        <Button textB='Know more' addClassNames='text-lg lg:text-xl' />
      </MyLink>
      </div>
    </div>
  );
}
