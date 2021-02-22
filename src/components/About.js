import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  const [header] = useState({
    mainHeader: "ABOUT",
    subHeader: "About Me",
    text:
      "Hold two Assoicates Degrees. One in Business Information Systems and another in Liberal Arts. Also, completed Codecademy Full Stack Web Developer program and multiple Udemy courses.",
  });

  const [state] = useState([
    { id: 1, title: "Name:", text: "Andy" },
    { id: 2, title: "Email:", text: "email@.com" },
    { id: 3, title: "Phone:", text: "555-555-5555" },
    { id: 4, title: "GitHub:", text: "github.com/Trex1888" },
  ]);

  return (
    <section id="about">
      <div className="about">
        <div className="container">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeader}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row  h-650 alignCenter">
            <div className="col-6">
              <div className="about__img">
                <img src="images/logo1.png" alt="img" />
              </div>
            </div>
            <div className="col-6">
              <div className="about__info">
                <h1>Eat, Sleep, React</h1>
                <div className="about__info-p1">
                  I have assembled and deployed over 45 fully functioning
                  projects using React. All the code and links to the projects
                  can be in found my GitHub repositories.
                </div>
                <div className="about__info-p2">
                  <a
                    href="https://github.com/Trex1888?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>GitHub Repositories Link</strong>
                  </a>
                  Every project has a link on the right under About.
                  {/* <p>
                    {" "}
                    <a
                      href="https://github.com/Trex1888?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>Personal Website</strong>
                    </a>{" "}
                    Check out my other personal website.{" "}
                  </p> */}
                </div>
                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6" key={info.id}>
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
