import React from 'react';
import Button from '../buttons/Button';
import A from '../buttons/A';

export default function Failed() {
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
