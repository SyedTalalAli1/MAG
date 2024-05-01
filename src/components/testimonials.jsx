import React from "react";
import "./testimonials.css";
import img1 from "../assets/j_1.jpg";
import img2 from "../assets/j_2.jpg";
import img3 from "../assets/j_3.jpg";
import img4 from "../assets/j_4.jpg";
import img5 from "../assets/j_5.jpg";
import img6 from "../assets/j_6.jpg";
import img7 from "../assets/j_7.jpg";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Hiroshi",
      comment:
        "Heart-pounding action, endless adventure, MAG is the ultimate gaming thrill!",
      rating: 5,
      profileImage: img1,
    },
    {
      id: 2,
      name: "Yuki",
      comment: "Unleash your strategic genius in MAG, where every move counts.",
      rating: 4,
      profileImage: img2,
    },
    {
      id: 3,
      name: "Akihiko",
      comment:
        "MAG offers an immersive gaming experience like no other, a true masterpiece.",
      rating: 5,
      profileImage: img3,
    },
    {
      id: 4,
      name: "Sakura",
      comment:
        "Thrilling battles, epic victories, MAG keeps you on the edge of your seat.",
      rating: 5,
      profileImage: img4,
    },
    {
      id: 5,
      name: "Haruka",
      comment:
        "Join the MAG community and embark on an unforgettable gaming journey.",
      rating: 5,
      profileImage: img5,
    },
    {
      id: 6,
      name: "Riko",
      comment:
        "From intense firefights to epic quests, MAG offers non-stop excitement.",
      rating: 5,
      profileImage: img6,
    },
    {
      id: 7,
      name: "Daichi",
      comment:
        "Experience the adrenaline rush of MAG, where every moment is electrifying",
      rating: 5,
      profileImage: img7,
    },
  ];

  return (
    <section className="testimonialsSection">
      <h2 className="featured">
        <span className="change">Testimonials</span>
      </h2>
      <div className="testimonialsContainer">
        {testimonials.map((testimonial) => (
          <div className="testimonialCard" key={testimonial.id}>
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="profilePic"
            />
            <p className="testimonialText">"{testimonial.comment}"</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, index) => (
                <span key={index} role="img" aria-label="star">
                  &#11088;
                </span>
              ))}
            </div>
            <p className="testimonialName">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
