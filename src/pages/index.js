import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <html lang='en' />
        <title>Evan Walter | Software Engineer</title>
        <meta
          name='description'
          content='I am a Software Engineer specializing in React. I recently served as a Contract Full Stack Software Engineer and previously as a Shopify Developer and Web Developer. I am excited to grow my skills in a new, full time Software Engineering role.'
        />
      </Helmet>
      <App />
    </>
  );
}
