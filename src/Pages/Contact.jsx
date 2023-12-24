// Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { FaFacebook, FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q5ks567",
        "template_olrefpj",
        form.current,
        "c0QlLfxOR3zDbpgHF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast('Email Sent Succesfully!');
        },
        (error) => {
          console.log(error.text);
          toast('Something Went Wrong .. Please Try Again Later ..!');
        }
      );
  };
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Contact Us - Sunstar | Jannah Marketing</title>
        <meta
          name="description"
          content="Connect with Jannah Marketing for any inquiries, collaborations, or feedback. We value your communication and look forward to hearing from you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Mohamed Ershad" />
        <meta
          name="keywords"
          content="Sunstar Sun Star Jannah Marketing, Contact Us, Inquiries, Collaboration, Feedback"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jannahmarketing.nl/contact" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - Jannah Marketing" />
        <meta
          property="og:description"
          content="Connect with Jannah Marketing for any inquiries, collaborations, or feedback. We value your communication and look forward to hearing from you."
        />
        <meta
          property="og:url"
          content="https://www.jannahmarketing.nl/contact"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jannahmarketing" />
        <meta name="twitter:title" content="Contact Us - Jannah Marketing" />
        <meta
          name="twitter:description"
          content="Connect with Jannah Marketing for any inquiries, collaborations, or feedback. We value your communication and look forward to hearing from you."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?id=19_ihJyNi-JG3Qs78AF4hF4VGI8dk6ax2"
        />
      </Helmet>
      <Header />
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            Have questions or inquiries? Reach out to us!
          </p>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="user_email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" className="Contact-Btn" value="Send" />
          </form>

          <div className="contact-extra">
            <h3>Connect with us on social media:</h3>
            <div className="social-icons">
              <a href="https://web.facebook.com/jannahMarketing" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} />
              </a>

              <a href="https://web.facebook.com/jannahMarketing" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=0779077134" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} />
              </a>
              {/* Placeholder X icon for illustration */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Close clicked");
                }}
              >
                <FaTimes size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
