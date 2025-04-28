import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewsLetter.css';

export default function NewsLetter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_y8pnzgy',
      'template_t6sstgn',
      {
        to_name: name,
        to_email: email,
      },
      'GEklFiPMR5garEvZM'
    ).then((response) => {
      toast.success("🎉 Subscription successful!", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
      setEmail('');
      setName('');
    }).catch((error) => {
      setMessage("Error sending email.");
      toast.error("❌ Error sending email.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
    });
  };

  return (
    <div className='container-fluid' style={{ background: "#E2E2D2" }}>
      <div className="newsletter-container container-fluid d-flex justify-content-center align-items-center" style={{ background: "#E2E2D2" }}>
        <div className="newsletter-content text-center p-4">
          <h1>Subscribe to Our Newsletter!</h1>
          <p>Get the latest updates, news, and exclusive offers straight to your inbox.</p>

          <form onSubmit={sendEmail}>
            <div className="newsletter-form-group">
             
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </div>
          </form>

          {message && <p>{message}</p>}
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
