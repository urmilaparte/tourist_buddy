import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful! Thank you, ${formData.name}`);
  };

  return (
    <section className="booking-form">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkin"
          value={formData.checkin}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkout"
          value={formData.checkout}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;
