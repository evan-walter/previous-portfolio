import React, { useState } from 'react';
import { send } from 'emailjs-com';
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

  if (!submitted && !loading) {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='name'>
              Name
            </label>
            <input
              id='name'
              type='text'
              maxLength='256'
              required
              name='fromName'
              value={formData.fromName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>
              Email
            </label>
            <input
              id='email'
              type='text'
              maxLength='256'
              aria-describedby='emailHelp'
              required
              name='fromEmail'
              value={formData.fromEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              type='text'
              rows='5'
              required
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type='submit' value='Connect' />
          </div>
        </form>
      </div>
    );
  } else if (submitted && loading) {
    return <Loading />;
  } else if (submitted && !loading && success) {
    return <Success />;
  } else if (submitted && !loading && !success) {
    return <Failed />;
  }
}
