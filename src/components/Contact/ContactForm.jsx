import React, { useContext, useState } from 'react';
import { send } from 'emailjs-com';
import PortfolioContext from '../../context/context';
import Loading from './Loading';
import Success from './Success';
import Failed from './Failed';

const ContactForm = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

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
      <div className="form-container">
        <form onSubmit={onSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="form-label color-main">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              maxLength="266"
              required
              name="fromName"
              value={formData.fromName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label color-main">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="form-control"
              maxLength="256"
              aria-describedby="emailHelp"
              required
              name="fromEmail"
              value={formData.fromEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label color-main">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              className="form-control"
              rows="5"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="fbtn fbtn--hero fbtn-wrap-ctl">
            <input className="fbtn-input-ctl" type="submit" value={btn} />
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
};

export default ContactForm;
