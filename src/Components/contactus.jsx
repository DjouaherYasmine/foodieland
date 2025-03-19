import React from "react";
import "./contactus.css";
import chefImage from "../assets/chef3.svg"; // Ensure the image is in the correct path

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Side - Image */}
      <div className="contact-image">
        <img src={chefImage} alt="Chef" />
      </div>

      {/* Right Side - Form */}
      <div className="contact-form">
        <h2 className="contact-title">Contact us</h2>
        
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name..." />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Your email address..." />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject..." />
            </div>
            <div className="form-group">
              <label>Enquiry Type</label>
              <select>
                <option>Advertising</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Messages</label>
            <textarea placeholder="Enter your messages..."></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
