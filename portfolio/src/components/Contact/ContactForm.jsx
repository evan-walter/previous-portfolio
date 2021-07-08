import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';

const ContactForm = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <div className="contact-wrapper__form-container">
      <form action="https://mailthis.to/EvanWalter" method="POST">
        <div className="contact-wrapper__form">
          <label className="contact-wrapper__form-label">Name</label>
          <input type="text" className="form-control" maxlength="266" />
        </div>
        <div className="contact-wrapper__form">
          <label className="contact-wrapper__form-label">Email</label>
          <input
            type="email"
            className="form-control"
            maxlength="256"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="contact-wrapper__form">
          <label className="contact-wrapper__form-label">Message</label>
          <textarea className="form-control" rows="5" maxlength="5000" />
        </div>
        <div
          type="submit"
          className="contact-wrapper__form form-submit-btn cta-btn cta-btn--resume"
        >
          {btn || 'Submit'}
        </div>
        {/* <input type="hidden" name="_subject" value="Portfolio - Contact Form Submitted" />
        <input type="submit" value="Send" data-wait="Please wait..." className="button w-button" />
        <input type="hidden" name="_subject" value="Portfolio - Contact Form Submitted" /> */}
      </form>
      {/* <div className="success-message w-form-done">
        <p className="success-message-text">Thank you! Your submission has been received.</p>
      </div> */}
    </div>//
  );
};

export default ContactForm;
