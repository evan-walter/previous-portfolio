import React from 'react';

export default function Failed() {
  return (
    <div>
      <i className='fa fa-times' aria-hidden='true' />
      <div>
        Oops! It looks like there was an issue with the form submission. Please
        try again. If the issue persists, please feel free to reach out to me on{' '}
      </div>
      <a href='https://linkedin.com/in/~evanwalter/' target='_blank' rel='noreferrer'>
        LinkedIn
      </a>
      .
    </div>
  );
}
