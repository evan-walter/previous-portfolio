import React from 'react';

export default function Testimonials() {
  const classNames = 'p-4 text-xl text-center';
  return (
    <div>
      <p className={classNames}>
        Evan is a hard worker and is extremely savvy. Even if he doesn't know
        how to do something, he is going to get creative and figure it out,
        which is one of the best qualities in a developer. He takes care with
        his work and is extremely communicative. I would highly recommend Evan
        for your projects.
      </p>
      <p className={classNames + ' italic'}> — Megan Spaulding</p>
      <p className={classNames + ' italic'}>Startup Redding, Shasta EDC, and Brand Science Co</p>
    </div>
  );
}
