import React from 'react';
import Fade from './Fade';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import Button from './buttons/Button';
import Socials from './buttons/Socials';

export default function Hero({ next }) {
  const textBigBase = 'text-center lg:text-left font-bold py-4 leading-relaxed '
  const textBigN = 'text-xl sm:text-3xl lg:text-4xl ';
  const textBigL = 'text-2xl sm:text-4xl lg:text-5xl ';
  const gradient = 'text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-secondary'; // pr-0.5

  const textLink = 'italic hover:text-secondarybg';

  return (
    <div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <div className='text-center lg:text-left'>
          <Fade from='left'>
            <h2 className={textBigBase + textBigL + gradient}>Evan Walter</h2>
          </Fade>
          <Fade from='left'>
            <h2 className={textBigBase + textBigN}>
              I am a Software Engineer specializing in React.
            </h2>
          </Fade>
          <Fade from='left'>
            <Socials addClassName='mx-4 my-4 text-3xl' />
          </Fade>
        </div>
        <Fade from='right'>
          <div>
            <iframe
              width='560' // '590'
              height='315' // '345'
              className='hero-vid m-auto'
              title='Welcome Video'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              src='https://www.loom.com/embed/cfb7f4e0581d48cc98a3ebb8c2ca4a06?autoplay=0'
            />
          </div>
        </Fade>
      </div>
      <Fade from='bottom'>
        <div className='mt-12 flex justify-center'>
          <p className='p-4 inline-block font-bold text-lg text-center text-primary bg-white bg-opacity-10 rounded-xl shadow-2xl'>
            I built this portfolio with{' '}
            <A h='https://reactjs.org/' addClassName={textLink}>React,</A>
            {' '}
            <A h='https://gatsbyjs.com/' addClassName={textLink}>Gatsby,</A>
            {' '}and{' '}
            <A h='https://tailwindcss.com/' addClassName={textLink}>Tailwind</A>
            . Check out my source code{' '}
            <A h='https://github.com/Evan-Walter/portfolio/' addClassName={textLink}>
              here
            </A>.
          </p>
        </div>
      </Fade>
      <Fade from='bottom'>
        <div className='pt-12 pb-2 text-center'>
          <MyLink to={next}>
            <Button text='Know more' Bg />
          </MyLink>
        </div>
      </Fade>
    </div>
  );
}
