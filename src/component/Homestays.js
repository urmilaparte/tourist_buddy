import React from "react";
import "./HomePage";

function Homestays() {
  const homestays = [
    {
      name: "Nature's Nest",
      description: "Experience tranquility and nature.",
      price: "$50/night",
      image: "https://via.placeholder.com/400x300",
    },
    {
      name: "Hilltop Haven",
      description: "A peaceful getaway in the hills.",
      price: "$70/night",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <section className="homestays" id="homestays">
      <h2>Top Homestays</h2>
      <div className="homestay-grid">
        {homestays.map((homestay, index) => (
          <div className="homestay-card" key={index}>
            <img src={homestay.image} alt={homestay.name} />
            <div className="homestay-info">
              <h3>{homestay.name}</h3>
              <p>{homestay.description}</p>
              <p className="price">{homestay.price}</p>
              <button className="btn details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Homestays;
