import React from 'react';

export default function Testimonials() {
  const p = 'p-4 md:text-lg lg:text-xl text-center'; // add italics
  return (
    <div className='m-auto lg:max-w-5xl'>
      <p className={p}>
        "Evan is a hard worker and is extremely savvy. Even if he doesn't know
        how to do something, he is going to get creative and figure it out,
        which is one of the best qualities in a developer. He takes care with
        his work and is extremely communicative. I would highly recommend Evan
        for your projects."
      </p>
      <p className={p + ' italic'}> — Megan Spaulding</p>
      <p className={p + ' italic'}>
        Startup Redding, Shasta EDC, and Brand Science Co
      </p>
    </div>
  );
}
