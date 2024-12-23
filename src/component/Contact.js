import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="slider">
        <div className="slides">
          <>
          <img src="https://www.opindia.com/wp-content/uploads/2022/08/Dholkal-Ganesha-Dantewada-31082022.jpg " alt="Image 1" />
          <img src=" https://dantewadatourism.in/tourism-property/category/IMG-T202211035076307972.jpg" alt="Image 2" />
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNxnE0uYhtn6-ZgA50wAvUvsEFi9yg2HtLA&s " alt="Image 3" />
          <img src="https://www.opindia.com/wp-content/uploads/2022/08/Dholkal-Ganesha-Dantewada-31082022.jpg " alt="Image 1" />
          <img src=" https://dantewadatourism.in/tourism-property/category/IMG-T202211035076307972.jpg" alt="Image 2" />
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oSDR8hmsxJ0zzhJ4f9QQFEfydGn60PNQ6A&s " alt="Image 4" />
          <img src="https://www.opindia.com/wp-content/uploads/2022/08/Dholkal-Ganesha-Dantewada-31082022.jpg " alt="Image 1" />
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oSDR8hmsxJ0zzhJ4f9QQFEfydGn60PNQ6A&s " alt="Image 5" />
          <img src=" https://dantewadatourism.in/tourism-property/category/IMG-T202211035076307972.jpg" alt="Image 2" />

          </>
        </div>
      </div>
      <div className="contact-form-container">
        <h2>𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝒔</h2>
        <p>𝑭𝒐𝒓 𝒂𝒏𝒚 𝒒𝒖𝒆𝒓𝒊𝒆𝒔, 𝒓𝒆𝒂𝒄𝒉 𝒐𝒖𝒕 𝒕𝒐 𝒖𝒔!</p>
        <form className="contact-form">
          <input type="text" placeholder="your-name" required />
          <input type="email" placeholder="your-email" required />
          <textarea placeholder="your-message" required></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
