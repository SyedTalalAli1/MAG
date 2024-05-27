import React from "react";
import "./slider.css";
import video from "../assets/intro.mp4";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div className="slider">
      <video autoPlay muted loop id="video-bg">
        <source src={video} type="video/mp4" />
      </video>
      <div className="slider-content">
        <img
          src={logo}
          alt="logo"
          width={400}
          height={100}
          className="d-inline-block align-text-top"
        />
        <button className="btn">
          <FontAwesomeIcon icon={faArrowRight} />
          <span> </span>
          Play Now
        </button>
        <p>
          Immerse Yourself in the World of MAG, Where Every Move Shapes Your
          Destiny!
        </p>
      </div>
    </div>
  );
};

export default Slider;
