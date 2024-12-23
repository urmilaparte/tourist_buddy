import React from "react";
import "./HomePage";

function Homestays() {
  const homestays = [
    
      {
        name: "Maa Danteshwari Homestay",
        description: "This homestay is located in the heart of the city and offers a great opportunity to experience local culture. It features clean rooms and delicious homemade food.",
        price: "₹1599 Day/night",
        image: "https://www.homestayindia.co.in/wp-content/uploads/2017/04/home-stay-india-slider-01.jpg.webp",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8821,81.3509",
        
      },
      {
        name: "Bailadila Eco Homestay",
        description: "This homestay is situated close to nature, allowing visitors to enjoy the beauty of Bailadila. It is famous for its peaceful environment and friendly service.",
        price: "₹1699 Day/night",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/67/c7/b6/the-homestay.jpg?w=700&h=-1&s=1",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8821,81.3509",
      },
      {
        name: "Tribal Heritage Homestay",
        description: "This homestay provides an opportunity to experience tribal traditions and culture up close. The rooms are designed in local style,a unique experience to the visitors.",
        price: "₹999 Day/night",
        image: "https://media2.thrillophilia.com/images/photos/000/158/561/original/1560755864_5.jpg?",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8512,81.3727", 
      },
      {
        name: "Indravati Riverside Homestay",
        description: "This homestay is located on the banks of the Indravati River and offers a relaxing stay with beautiful views. The tranquility and natural beauty here are unmatched.",
        price: "₹1499 Day/night",
        image: "https://tourism.cgstate.gov.in/img/resorts/008.jpg",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8531,81.5911",
      },
      {
        name: "Dholkal Peak Homestay",
        description: " Located near the famous Dholkal Ganesh idol, this homestay is perfect for trekkers and adventure enthusiasts.",
        price: "₹1099 Day/night",
        image: "https://sahyadristays.com/static/falcon/img/stock/page/pratyasha/159557_Manikyadhara%20Homestay-1.webp",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8531,81.5911",
      },
      {
        name: "Barsoor Heritage Homestay",
        description: "This homestay is located in the ancient village of Barsoor, known for its historic temples and serene surroundings. Experience a peaceful stay amidst rich history and culture.",
        price: "₹1499 Day/night",
        image: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v1531213619/Hotel/Chikmagalur/00120656/gallery-4_yJ8KB5.jpg",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.9901,81.3649",
      },
      {
        name: "Adivasi Retreat Homestay",
        description: "A unique retreat showcasing Adivasi art, dance, and traditions, offering an immersive cultural experience.",
        price: "₹899 Day/night",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f9/f8/c0/the-hotel-the-view.jpg?w=700&h=-1&s=1",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.8999,81.3762",
      },
      {
        name: "Mayalu Homestay",
        description: "This homestay is located in a serene environment surrounded by lush greenery. It offers homely comfort and delicious local cuisine.",
        price: "₹1199 Day/night",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330382975.jpg?k=ebd7c9acfa447d9a3387a883dfabaf5e67aabde51d4cca4b2e42cc541d126fbb&o=&hp=1",
        link: "https://dantewada.nic.in/en/tourism/accommodation/",
        location: "18.7885,81.4505", 
        
      },
    ]
  

  return (
    <section className="homestays" id="homestays">
      <h2>🏡Top Homestays🏡</h2>
      <div className="homestay-grid">
        {homestays.map((homestay, index) => (
          <div className="homestay-card" key={index}>
            <img src={homestay.image} alt={homestay.name} />
            <div className="homestay-info">
              <h3>{homestay.name}</h3>
              <p>{homestay.description}</p>
              <p className="price">{homestay.price}</p>
              {/* <button className="btn details">View Details</button> */}
              <a href={homestay.link} className="btn-details"><button>View Details</button></a>
              <div className="map">
                <iframe
                  src={`https://www.google.com/maps?q=${homestay.location}&output=embed`}
                  // width="10%"
                  // height="20"
                  // style={{ border: 0 }}
                  allowFullScreen=""
                  loading="fast"
                  title={homestay.name}
                ></iframe>
              </div>
              </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Homestays;
