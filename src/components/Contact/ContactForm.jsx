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
          <label htmlFor="name" className="form-label text-color-main">
            Name
          </label>
          <input id="name" type="text" className="form-control" maxLength="266" />
        </div>
        <div>
          <label htmlFor="email" className="form-label text-color-main">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            maxLength="256"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label text-color-main">
            Message
          </label>
          <textarea id="message" className="form-control" rows="5" />
        </div>
        <div className="fsubmit fsubmit--hero fsubmit-wrap-ctl">
          <input className="fsubmit-input-ctl" type="submit" value={btn} />
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
