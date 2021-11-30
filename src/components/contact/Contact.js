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

  const label = ''; // color-main
  const formCtl = '';


  return (
    <div>
      {!submitted && !loading && (
        <form onSubmit={onSubmit} className=''>
          <div>
            <label htmlFor='name' className={label}>Name
              <input id='name' type='text' maxLength='256' required name='fromName'
              value={formData.fromName} onChange={handleChange} className={formCtl} />
            </label>
          </div>
          <div>
            <label htmlFor='email' className={label}>Email
              <input id='email' type='text' maxLength='256' aria-describedby='emailHelp' required name='fromEmail'
                value={formData.fromEmail} onChange={handleChange} className={formCtl} />
            </label>
          </div>
          <div>
            <label htmlFor='message' className={label}>Message
              <textarea id='message' type='text' rows='5' required name='message'
                value={formData.message} onChange={handleChange} className={formCtl} />
            </label>
          </div>
          <div>
            <Button textB>
              <input type='submit' value='Connect' className={formCtl} />
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
