import React, { useState } from "react";
import "../styles/Nav.css";
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
  const [state, setState] = useState(true);

  return (
    <section id="home">
      <nav className="navbar">
        <div className="container">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt="logo"
                />
              </div>
            </ul>
            {state ? (
              <ul className="navbar__right">
                <li>
                  <a className="smoothscroll" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#react">
                    React
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#mern">
                    MERN
                  </a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="toggle" onClick={() => setState(!state)}>
          <FaAlignJustify />
        </div>
      </nav>
    </section>
  );
};

export default Nav;
