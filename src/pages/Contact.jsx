import React from "react";
import "../css/Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__form">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email Address</label>
          <input type="text" placeholder="Your Email" />

          <label>Message</label>
          <textarea type="text" placeholder="Your Message"></textarea>

          <button className="submit_btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        {/* Phone Section */}
        <p>
          <i className="fas fa-phone"></i>
          (33) 346-5723
        </p>
        {/* Email Section */}
        <p>
          <i className="fas fa-envelope"></i>
          <a href="mailto:bamyan.restaurant25@gmail.com">
            bamyan.restaurant25@gmail.com
          </a>
        </p>
        {/* Address Section */}
        <p>
          <i className="fas fa-map-marker-alt"></i>
          2345 Divi Avenue San Francisco, CA 93151
        </p>
      </div>
    </div>
  );
}
export default Contact;
