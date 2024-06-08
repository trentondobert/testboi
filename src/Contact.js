//import React from 'react';
import "./css/Contact.css"
import React, { useState } from 'react';
import locationImage from './Images/location.jpg'; // Import the logo image

function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={handleChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Message</label>
            <textarea id="description" name="description" className="large-textarea" />
          </div>
          <button type="submit" onClick={console.log("Hello Bud")}>Submit</button>
        </form>
      </div>
      <div className="business-info">
        <h1>Seamless Direct Contact</h1>
        <p>Phone: 321-432-1348</p>
        <p>Email: anderson.bros@hotmail.com</p>
        <p>Address: 4165 Dow rd Unit 21 Melbourne FL 32904</p>
        <img src={locationImage} alt="Seamless Gutters Image"></img>
      </div>
    </div>
  );
}

export default Contact;
