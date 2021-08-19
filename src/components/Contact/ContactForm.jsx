import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const ContactForm = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

  return (
    <div className="form-container">
      <form action="https://mailthis.to/EvanWalter" method="POST">
        <div>
          <label htmlFor="name" className="form-label">
            Name
            <input id="name" type="text" className="form-control" maxLength="266" />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="form-label">
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
        <div>
          <label htmlFor="message" className="form-label">
            Message
            <textarea id="message" className="form-control" rows="5" />
          </label>
        </div>
        <div className="form-btn-wrapper">
          <input className="form-btn" type="submit" value={btn} />
        </div>
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
