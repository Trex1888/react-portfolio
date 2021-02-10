import React, { useState } from "react";
import "../styles/Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  const [state] = useState({
    title: "Hello World!",
    text: "My name is Andy and I'm a React and MERN Full Stack Web Developer",
    image: "images/logo2.png",
  });

  return (
    <section id="header">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <FaFacebookF className="headerIcon" />
                    </li>
                    <li>
                      <FaTwitter className="headerIcon" />
                    </li>
                    <li>
                      <FaPinterest className="headerIcon" />
                    </li>
                    <li>
                      <FaInstagram className="headerIcon" />
                    </li>
                  </ul>
                  <h1>{state.title}</h1>
                  <p>{state.text}</p>
                  <div className="header__buttons">
                    <a
                      href="https://github.com/Trex1888"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      My GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="banner__img">
                <img src={state.image} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
