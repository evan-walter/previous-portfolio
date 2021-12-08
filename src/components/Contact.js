import React, { useState } from 'react';
import { send } from 'emailjs-com';
import Fade from './Fade';
import Button from './buttons/Button';
import {Loading, Success, Failed} from './ContactStatus';

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

    // For testing without sending emails. Uncomment the lines below and comment the emailjs import along with the send method.
    // setTimeout(() => {
    //   setLoading(false);
    //   setSuccess(true);
    // }, 2000);

    send('service_83npejq', 'template_5kr2cjb', formData, 'user_AIUe2OzEEkBrATar3Pq1P')
      .then((res) => {
        setLoading(false);
        setSuccess(true);
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
  const inputCtl = 'p-2 focus:outline-none rounded shadow-2xl';

  return (
    <div className='contact-ctl m-auto w-full'> {/** */}
      {submitted ?
        <div className='mt-12 flex justify-center'>
          <div className='p-4 font-bold text-xl text-center text-primary bg-white rounded-xl shadow-2xl'> {/**transform transition-opacity duration-200 ease-in-out */}
            {
              loading ? <Loading /> :
              (success ? <Success />  : <Failed />)
            }
          </div>
        </div> :
        (!loading ?
          <Fade from='bottom'>
            <form onSubmit={onSubmit}>
              <div className={fieldWrap}>
                <label htmlFor='name' className={labelCtl}><Button textNoB='Name' addClassName='cursor-text' /></label>
                <input id='name' type='text' maxLength='256' required name='fromName'
                  value={formData.fromName} onChange={handleChange} className={inputCtl} />
              </div>
              <div className={fieldWrap}>
                <label htmlFor='email' className={labelCtl}><Button textNoB='Email' addClassName='cursor-text' /></label>
                <input id='email' type='text' maxLength='256' aria-describedby='emailHelp' required name='fromEmail'
                  value={formData.fromEmail} onChange={handleChange} className={inputCtl} />
              </div>
              <div className={fieldWrap}>
                <label htmlFor='message' className={labelCtl}><Button textNoB='Message' addClassName='cursor-text' /></label>
                <textarea id='message' type='text' rows='5' required name='message'
                  value={formData.message} onChange={handleChange} className={inputCtl} />
              </div>
              <div className='pt-12 m-auto text-center'>
                <Button textB='Connect'>
                  <input type='submit' className={inputCtl} />
                </Button>
              </div>
            </form>
          </Fade> : null
        )
      }
    </div>
  );
}
