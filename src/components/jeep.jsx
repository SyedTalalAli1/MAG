import React from "react";
import JeepVideo from "../assets/valor-jeep.mp4";
import "./jeep.css";

const Jeep = () => {
  return (
    <div className="jeep-section">
      <div className="row">
        <div className="col md-6">
          <div className="jeep-info">
            <h1>Your Community Awaits</h1>
            <p>
              MAG2 is currently in its 'Alpha' stage of development, crafted in
              collaboration with a dedicated, informed, and inclusive community.
              Every update introduces fresh features, advancements in
              technology, and gameplay enhancements, evolving alongside our
              valued development partners – the players. Whether you're
              mastering the basics or banding together against challenges,
              support is readily available. Dive into the universe now and shape
              its future!
            </p>
          </div>
        </div>
        <div className="col md-6">
          <div className="jeep-video">
            <iframe
              width="560"
              height="400"
              src="https://www.youtube.com/embed/lvczclQYK_U?si=qkCPGXbcvWHWB1qs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jeep;
