import "./contact.css";

import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context/context";

const Contact = () => {
  const [done, setDone] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    

    emailjs
      .sendForm(
        "service_w03ndkq",
        "template_do8ii7c",
        formRef.current,
        "9lEpMIGZzrHpfATrH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +234 9066 333 575
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              adebisisheriff572@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              69,Lambo Lasunwon Road, Off Laspotech, Ikorodu
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            />
            <button>Submit</button>
            {done && <span>Thanks, I will revert ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
