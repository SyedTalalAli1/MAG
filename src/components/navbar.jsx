import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

function NavBar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="logo" className="d-inline-block" />
        </a>
        <div className="clock">
          <b>MAG Universal Time: {currentTime}</b>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://magshadowwar.com/shop/">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://magshadowwar.com/community/"
              >
                Forums
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
          <a href="/login">
            {" "}
            <a href="https://magshadowwar.com/register/">
              <button className="btn btn-primary" id="signup">
                Join Now
              </button>
            </a>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
