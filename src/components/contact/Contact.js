import React, { useState } from 'react';
import { send } from 'emailjs-com';
import Button from '../buttons/Button';
import Loading from './Loading';
import Success from './Success';
import Failed from './Failed';

export default function Contact() {
  const [formData, setFormData] = useState({
    fromName: '',
    fromEmail: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    // For testing without sending emails.  Uncomment the lines below and comment the emailjs import along with the send method.
    // setTimeout(() => {
    //   setLoading(false);
    //   setSuccess(true);
    // }, 2000);

    send('service_83npejq', 'template_5kr2cjb', formData, 'user_AIUe2OzEEkBrATar3Pq1P')
      .then((res) => {
        setSuccess(true);
        setLoading(false);
        console.log('Success ', res.status, res.text);
      })
      .catch((err) => {
        setLoading(false);
        console.log('Failed ', err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldWrap = 'grid grid-cols-1';
  const labelCtl = 'py-1 text-lg'; // color-main
  const inputCtl = 'p-2 focus:outline-none';

  return (
    <div className='contact-ctl m-auto w-full'> {/* m-auto max-w-lg */}
      {!submitted && !loading && (
        <form onSubmit={onSubmit} className=''>
          <div className={fieldWrap}>
            <label htmlFor='name' className={labelCtl}><Button textNoB='Name' /></label>
            <input id='name' type='text' maxLength='256' required name='fromName'
              value={formData.fromName} onChange={handleChange} className={inputCtl} />
          </div>
          <div className={fieldWrap}>
            <label htmlFor='email' className={labelCtl}><Button textNoB='Email' /></label>
            <input id='email' type='text' maxLength='256' aria-describedby='emailHelp' required name='fromEmail'
              value={formData.fromEmail} onChange={handleChange} className={inputCtl} />
          </div>
          <div className={fieldWrap}>
            <label htmlFor='message' className={labelCtl}><Button textNoB='Message' /></label>
            <textarea id='message' type='text' rows='5' required name='message'
              value={formData.message} onChange={handleChange} className={inputCtl} />
          </div>
          <div className='pt-12 m-auto text-center'>
            <Button textB='Connect'>
              <input type='submit' className={inputCtl} />
            </Button>
          </div>
        </form>
      )}
      {submitted &&
        (loading && <Loading />)
        (!loading &&
          (success && <Success />)
          (!success && <Failed />)
        )
      }
    </div>
  );
}
