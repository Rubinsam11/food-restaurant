import React from 'react';
import rImage from './r.jpg';  // Adjust path as needed
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container container">
        <div className="contact-img">
          {/* Replace with the correct path to r.jpg */}
          <img src={rImage} alt="Contact us" />

        </div>
      
        <div className="form-container">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea cols="30" rows="6" placeholder="Type Your Message"></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
