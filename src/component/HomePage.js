import React, { useState } from "react";
import "./HomePage.css";
import BookingForm from "./BookingForm";
import cgMain1 from "./cgMain1.jpg";
import cgMain2 from "./cgMain2.jpg";
import cgMain3 from "./cgMain3.jpg";
import cgMain4 from "./cgMain4.jpg";
import CG1 from "./CG1.jpg";
import cg2 from "./cg2.jpg";
import cg3 from "./cg3.jpg";
import cg4 from "./cg4.jpg";
import cg5 from "./cg5.jpg";
import cg6 from "./cg6.jpg";
import cg7 from "./cg7.jpg";

function HomePage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const images = [
    cgMain1,
    cgMain2,
    cgMain3,
    cgMain4,
    CG1,
    cg2,
    cg3,
    cg4,
    cg5,
    cg6,
    cg7,
  ];

  const handleBookNowClick = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <section className="home" id="home">
      <div className="carousel">
        <div className="carousel-images">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`}/>
          ))}
        </div>
      </div>

      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to Dantewada</h1>
          <p>Explore the culture and beauty of Dantewada</p>
          <div className="banner-buttons">
            <button className="btn explore">Explore</button>
            <button className="btn book" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Conditional rendering for BookingForm */}
      {isFormVisible && (
        <div className="booking-form-overlay">
          <BookingForm onClose={closeForm} />
        </div>
      )}
    </section>
  );
}

export default HomePage;