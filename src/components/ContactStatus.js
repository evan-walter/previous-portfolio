import React from 'react';
import A from './buttons/A';

const wrapCName = 'flex';

export function Loading() {

  return (
    <div className={wrapCName}>
      <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export function Success() {
  return (
    <div className={wrapCName}>
      <div className='text-green-600'>
        <i className='fa fa-check' aria-hidden='true' />
      </div>{' '}
      <div>
        Contact form received. I look forward to being in touch. Thank you.
      </div>
    </div>
  );
}

export function Failed() {
  return (
    <div className={wrapCName}>
      <div className='text-red-600'>
        <i className='fa fa-times' aria-hidden='true' />
      </div>{' '}
      <div>
        Oops! It looks like there was an issue with the form submission. Please
        try again. If the issue persists, please feel free to reach out to me on{' '}
        <span className='italic hover:text-black'>
          <A h='https://linkedin.com/in/~evanwalter/' >LinkedIn</A>
        </span>
        .
      </div>
    </div>
  );
}
