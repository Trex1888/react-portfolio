import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [header] = useState({
    mainHeader: "REACT",
    subHeading: "React Projects",
    text:
      "Currently, there are over 45 React projects in my portfolio. ALL PROJECTS ARE SECURELY HOSTED. LOGINS SECURED WITH GOOGLE AUTHENTICATION.",
  });

  const [state] = useState([
    {
      id: 1,
      heading: "React",
      msg1: "WhatsApp App",
      msg2: "WhatsApp chat clone. Create new chat room or leave a mesaage.",
      img: "/images/whats.png",
      name: "Code",
      app: "https://whatsapp-936a1.web.app",
      code: "https://github.com/Trex1888/react-whatsapp-clone",
    },
    {
      id: 2,
      heading: "React",
      msg1: "Yelp Search",
      msg2: "Search for restaurants by ratings using the Yelp search feature.",
      img: "/images/yelp.PNG",
      name: "Code",
      app: "https://yelp-search-7d9ed.web.app",
      code: "https://github.com/Trex1888/react-yelp-search",
    },
    {
      id: 3,
      heading: "React",
      msg1: "Twitter App",
      msg2: "Twitter app clone. View the news feed and make your own Tweet.",
      img: "/images/twitter.PNG",
      name: "Code",
      app: "https://twitter-1d49a.web.app",
      code: "https://github.com/Trex1888/react-twitter-clone",
    },
    {
      id: 4,
      heading: "React",
      msg1: "Hulu Clone",
      msg2:
        "Hulu clone with search functionality. Click on categories at the top.",
      img: "/images/hulu.PNG",
      name: "Code",
      app: "https://hulu-e87d0.web.app",
      code: "https://github.com/Trex1888/react-hulu-clone",
    },
    {
      id: 5,
      heading: "React",
      msg1: "TikTok Clone",
      msg2: "Click video to play(No Audio). Scroll down for more videos.",
      img: "/images/tik.PNG",
      name: "Code",
      app: "https://tiktok-dd5a5.web.app",
      code: "https://github.com/Trex1888/react-tiktok-clone",
    },

    {
      id: 6,
      heading: "React",
      msg1: "Gmail Clone",
      msg2: "Login with Google. Click compose and send a new email.",
      img: "/images/mail.PNG",
      name: "Code",
      app: "https://fir-cd083.web.app",
      code: "https://github.com/Trex1888/react-redux-gmail-clone",
    },
  ]);

  return (
    <section id="react">
      <div className="projects">
        <div className="container">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row">
            {state.map((projects) => (
              <div className="col-4" key={projects.id}>
                <div className="project">
                  <div className="projectHeading">{projects.heading}</div>
                  <ul>
                    <li>{projects.msg1}</li>
                    <li>{projects.msg2}</li>
                  </ul>
                  <a href={projects.app} target="_blank" rel="noreferrer">
                    <img
                      className="project__img"
                      src={projects.img}
                      alt="img"
                    />
                  </a>
                  <div className="project__btn">
                    <a
                      href={projects.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      {projects.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
