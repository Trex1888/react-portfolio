import React, { useState } from "react";
import "../styles/Skills.css";
import {
  FaGithub,
  FaAndroid,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

const Skills = () => {
  const [header] = useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
    text:
      "Front and back end web development. Build, deploy, and host full stack React projects with dynamic data via MongoDB or Firebase.",
  });

  const [state] = useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "Web Development",
      text:
        "Up to date knowledge of modern web languages. HTML, CSS, JavaScript, ES6, React, Redux, MERN stack.",
    },
    {
      id: 2,
      icon: <FaReact className="commonIcons" />,
      heading: "JavaScript and React",
      text:
        "Write clean and organized code. React is my speciality, and the most in demand framework/library.",
    },
    {
      id: 3,
      icon: <FaNodeJs className="commonIcons" />,
      heading: "MERN Stack",
      text:
        "Full stack MERN builds with real time functionality using MongoDB Express React & Node.js.",
    },
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Android Mobile App Developer Certification and published apps in Google Play Store.",
    },
    {
      id: 5,
      icon: <FaJava className="commonIcons" />,
      heading: "Object Oriented",
      text:
        "Experienced with C# and Java. My coding journey started with these two object oriented languages.",
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" />,
      heading: "Git",
      text:
        "Use command line to commit, publish, deploy, and update code and projects through GitHub.",
    },
  ]);

  return (
    <section id="skills">
      <div className="skills">
        <div className="container">
          <div className="skills__header">
            <div className="common">
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div className="col-4 bgMain" key={info.id}>
                  <div className="skills__box">
                    {info.icon}
                    <div className="skills__box-header">{info.heading}</div>
                    <div className="skills__box-p">{info.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
