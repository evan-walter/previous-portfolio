import React from 'react';
import Button from '../buttons/Button';
import A from '../buttons/A';

export function Loading() {
  return (
    <div>
      <div>
        Loading...
      </div>
    </div>
  );
}

export function Success() {
  return (
    <div>
      <div>
        Contact form received. I look forward to being in touch. Thank you.
      </div>
    </div>
  );
}

export function Failed() {
  return (
    <div>
      <i className='fa fa-times' aria-hidden='true' />
      <div>
        Oops! It looks like there was an issue with the form submission. Please
        try again. If the issue persists, please feel free to reach out to me on{' '}
      </div>
      <A h='https://linkedin.com/in/~evanwalter/'>
        <Button textNoB='LinkedIn' />
      </A>
      .
    </div>
  );
}
