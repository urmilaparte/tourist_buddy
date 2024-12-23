import React, { useState } from "react";
import BookingForm from "./BookingForm";
import './HomePage.css';

function HomePage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleBookNowClick = () => {
    setIsFormVisible(true); // Form ko dikhana shuru
  };

  const closeForm = () => {
    setIsFormVisible(false); // Form ko band karna
  };

  return (
    <section className="home" id="home">
      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to Dantewada</h1>
          <p>Explore the culture and beauty of Dantewada</p>
          <div className="banner-buttons">
            <button className="btn explore">Explore</button>
            <button className="btn book" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>
      </div>

      {/* Conditional rendering for BookingForm */}
      {isFormVisible && (
        <div className="booking-form-overlay">
          <BookingForm onClose={closeForm} /> {/* Pass handleClose function */}
        </div>
      )}
    </section>
  );
}

export default HomePage;
