import React from 'react';
import Button from '../buttons/Button';
import A from '../buttons/A';

export default function Status({ status }) {
  const loadingDiv = (
    <div>
      <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
      <span className='sr-only'>Loading...</span>
    </div>
  );

  const failedDiv = (
    <div>
      <div> {/**ctl-x */}
        <i className='fa fa-times' aria-hidden='true' />
      </div>{' '}
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

  const successDiv = (
    <div>
      <div> {/**ctl-check */}
        <i className='fa fa-check' aria-hidden='true' />
      </div>{' '}
      <div>
        Contact form received. I look forward to being in touch. Thank you.
      </div>
    </div>
  );

  return (
    <div className='mt-12 flex justify-center'>{/**transform transition-opacity duration-200 ease-in-out */}
      <p className='p-4 inline-block font-bold text-lg text-center text-primary bg-white bg-opacity-75 rounded-xl shadow-2xl'>
        {(status.loading ? {loadingDiv} :
          (status.success ? {successDiv} : {failedDiv})
        )}
      </p>
    </div>
  );
}
