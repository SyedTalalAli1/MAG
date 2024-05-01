import React from "react";
import "./cards.css";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="plan">
        <h2 className="featured">
          <span className="change">Plan Your Way</span>
        </h2>
      </div>
      <div className="info">
        <p className="para">
          Play Your Way: Explore, Fight, and Triumph in the MAG 2 Universe
        </p>
      </div>
      <div className="magcards">
        <div className="row">
          <div className="col-md-4">
            <div className="image-container">
              <img className="image" src={image3} alt="loading..."></img>
              <div className="image-text">
                <h1>Explore</h1>
                <p>
                  Dive into the captivating world of MAG 2 and embark on an
                  exhilarating journey of exploration. Traverse diverse
                  landscapes, uncover hidden secrets, and encounter thrilling
                  challenges around every corner. With boundless opportunities
                  awaiting discovery, prepare to immerse yourself in the
                  adventure of a lifetime.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <img className="image" src={image2} alt="loading..."></img>
              <div className="image-text">
                <h1>Adventure</h1>
                <p>
                  In MAG 2, brace yourself for intense gunfights and
                  adrenaline-pumping action. With unwavering confidence, wield
                  powerful firearms as you navigate through daring adventures
                  filled with thrilling encounters. Each battle is an
                  opportunity to showcase your skills and strategic prowess. In
                  this ultimate adventure of gunfights and courage, emerge
                  victorious and conquer every challenge that comes your way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <img className="image" src={image1} alt="loading..."></img>
              <div className="image-text">
                <h1>Legendary Warriors</h1>
                <p>
                  Step into the shoes of a legendary warrior in MAG 2, armed
                  with a powerful gun in hand. As you journey through this
                  dynamic world, hone your skills and become a master of arms.
                  With precision and strength, face formidable foes and conquer
                  every challenge that crosses your path. In MAG 2, your courage
                  and expertise will lead you to greatness as you rise to become
                  the ultimate warrior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
