import React, { useState } from "react";
import './BookingForm.css';

function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const { name, email, phone, checkin, checkout, guests } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
  event.preventDefault();
  
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxQLHxHNhDtQgC_3rjAOaM1TI-U8M-CKNyYuROZg_X4RMmbt2yg-pxQpoVgI7qo97ue4w/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode:'no-cors',
      body: JSON.stringify({
        name, email, phone, checkin, checkout, guests
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Form submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  

  return (
    <div className="booking-form-container">
      <button className="close-btn" onClick={onClose}>Close</button>
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkin">Check-in Date</label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={checkin}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkout">Check-out Date</label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={checkout}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;




