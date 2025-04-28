import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validate = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error('Please enter your name.', {
        position: 'top-right',
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      return false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.', {
        position: 'top-right',
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      return false;
    }

    if (!subject.trim()) {
      toast.error('Please enter a subject.', {
        position: 'top-right',
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      return false;
    }

    if (!message.trim() || message.length < 10) {
      toast.error('Message should be at least 10 characters.', {
        position: 'top-right',
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const { name, email, subject, message } = formData;

    toast.success('Message ready to send via your email app!', {
      position: 'top-right',
      autoClose: 3000,
      closeButton: false,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });

    const mailtoLink = `mailto:vedantraut.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <div>
      <div className="container Contact-Container mt-5">
        <h2 className="text-center mb-4 pt-3">Contact Us</h2>
        <div className="row justify-content-center Contact-Row">
          <div className="col-md-6">
            <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
