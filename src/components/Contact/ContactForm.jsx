import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';

const ContactForm = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

  return (
    <div className="contact-wrapper__form-wrapper">
      <form action="https://mailthis.to/EvanWalter" method="POST">
        <div className="contact-wrapper__form">
          <label htmlFor="name" className="contact-wrapper__form-label">
            Name
            <input id="name" type="text" className="form-control" maxLength="266" />
          </label>
        </div>
        <div className="contact-wrapper__form">
          <label htmlFor="email" className="contact-wrapper__form-label">
            Email
            <input
              id="email"
              type="email"
              className="form-control"
              maxLength="256"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="contact-wrapper__form">
          <label htmlFor="message" className="contact-wrapper__form-label">
            Message
            <textarea id="message" className="form-control" rows="5" />
          </label>
        </div>
        <span className="contact-wrapper__form-submit-btn cta-btn cta-btn--resume">
          <input
            className="contact-wrapper__form-submit-btn cta-btn cta-btn--resume"
            type="submit"
            value={btn}
          />
        </span>
        <input type="hidden" name="_subject" value="Portfolio - Contact Form Submitted" />
        <input type="hidden" name="_after" value="https://evanwalter.dev" />
      </form>
      {/* <p className="contact-wrapper__form" name="_confirmation">Thank you! Your submission has been received!</p>
      <p className="contact-wrapper__form">
        Oops! Something went wrong while submitting the form :(
      </p> */}
    </div>
  );
};

export default ContactForm;
