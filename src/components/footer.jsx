import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About MAG</h4>
          <p>
            MAG2: Where legends begin, adventures thrive, and destinies unfold.
            Join us and make history in the world of MAG2.
          </p>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>wwww.magshadowwar.com</p>
          <p>Email: support@magshadowwar.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: United States Of America</p>
        </div>
        <div className="footer-column">
          <h1>STATISTICS</h1>
          <div className="users">
            <h2>100k+</h2>
            <h3>Total Users</h3>
          </div>

          <div className="users">
            <h2>10k+</h2>
            <h3>Active Gamers</h3>
          </div>

          <div className="users">
            <h2>1k+</h2>
            <h3>Top Gamers</h3>
          </div>

          <div className="users">
            <h2>900K+</h2>
            <h3>Total Views</h3>
          </div>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <p>Stay updated on our latest games and events.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/coppergamestudios5958">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/MAG2sw?s=21&t=92K5Km2MVS5c6SnybWTKjg">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/MAG2sw?igshid=ZDc4ODBmNjlmNQ">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.threads.net/@MAG2sw">
              <FontAwesomeIcon icon={faThreads} />
            </a>
            <a href="https://www.youtube.com/@coppergamestudios5958">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MAG2. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
