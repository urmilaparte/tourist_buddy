import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home" id="home">
      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to Dantewada</h1>
          <p>Explore the culture and beauty of Dantewada</p>
          <div className="banner-buttons">
            <button className="btn explore">Explore</button>
            <button className="btn book">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
