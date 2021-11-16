import React from 'react';
import MyLink from './buttons/MyLink';
import Button from './buttons/Button';
import { DownArrow } from './buttons/Arrows';
import Socials from './buttons/Socials';

export default function Hero({ next }) {
  return (
    <div>
      <h2>Hello, my name is Evan.</h2>
      <h2>I am a Software Engineer specializing in React.</h2>
      <MyLink to={next}>
        <Button text='Know More' />
      </MyLink>
      <Socials />
    </div>
  );
}
