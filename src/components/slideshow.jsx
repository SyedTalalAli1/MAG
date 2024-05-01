import React, { useState, useEffect } from "react";
import "./slideshow.css";
import img1 from "../assets/slide-1.png";
import img2 from "../assets/slide-2.png";
import img3 from "../assets/slide-3.png";
import img4 from "../assets/slide-4.png";
import img5 from "../assets/slide-5.png";

const SlideShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, images.length]);

  return (
    <div className="slider-show">
      <div className="plan">
        <h2 className="featured">
          <span className="change">Stanton System</span>
        </h2>
        <hr></hr>
      </div>
      <div className="info">
        <p className="para">Discover Deserted Car Locations in MAG2</p>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          onClick={() =>
            setActiveIndex((activeIndex - 1 + images.length) % images.length)
          }
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
