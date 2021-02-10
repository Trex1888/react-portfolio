import React, { useState } from "react";
import "../styles/Mern.css";

function Mern() {
  const [header] = useState({
    mainHeader: "MERN",
    subHeading: "MERN Projects",
    text:
      "5 full stack MERN projects in portfolio and more in progress. ALL PROJECTS ARE SECURELY HOSTED. LOGINS SECURED WITH GOOGLE AUTHENTICATION.",
  });

  const [state] = useState([
    {
      id: 1,
      heading: "MERN",
      msg1: "Imessage App",
      msg2: "Real time Imessage clone. Create a chat room and leave a message.",
      img: "/images/mess.PNG",
      name: "Code",
      app: "https://mernimess.web.app/",
      code: "https://github.com/Trex1888/mern-redux-imessage-clone",
    },
    {
      id: 2,
      heading: "MERN",
      msg1: "Memory Creator",
      msg2: "Create your own memory or like some of the current memories.",
      img: "/images/mem.PNG",
      name: "Code",
      app: "https://mern-memory.web.app",
      code: "https://github.com/Trex1888/mern-memory-app",
    },
    {
      id: 3,
      heading: "MERN",
      msg1: "Facebook App",
      msg2: "Login with Google and create a Facebook News Feed post.",
      img: "/images/fb.PNG",
      name: "Code",
      app: "https://mernfbook.web.app",
      code: "https://github.com/Trex1888/mern-facebook-clone",
    },
    {
      id: 4,
      heading: "MERN",
      msg1: "Amazon Store",
      msg2: "Create an account or Login. Add items to cart and checkout.",
      img: "/images/amazon.PNG",
      name: "Code",
      app: "https://fluffsapp.herokuapp.com",
      code: "https://github.com/Trex1888/react-whatsapp-clone",
    },
    {
      id: 5,
      heading: "MERN",
      msg1: "Discord App",
      msg2: "Login with Google to create a channel and write messages.",
      img: "/images/discord.PNG",
      name: "Code",
      app: "https://discord-chat-mern.web.app",
      code: "https://github.com/Trex1888/mern-redux-discord-app",
    },
    {
      id: 6,
      heading: "MERN",
      msg1: "WhatsApp App",
      msg2: "NOT COMPLETE! MERN WhatsApp clone. STILL UNDER CONSTRUCTION.",
      img: "/images/under.jpg",
      name: "Code",
      app: "https://mernwhats.web.app",
      code: "https://github.com/Trex1888/mern-whatsapp-clone",
    },
  ]);

  return (
    <section id="mern">
      <div className="main">
        <div className="container">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row">
            {state.map((mern) => (
              <div className="col-4" key={mern.id}>
                <div className="mern">
                  <div className="mernHeading">{mern.heading}</div>
                  <ul>
                    <li>{mern.msg1}</li>
                    <li>{mern.msg2}</li>
                  </ul>
                  <a href={mern.app} target="_blank" rel="noreferrer">
                    <img className="mern__img" src={mern.img} alt="img" />
                  </a>
                  <div className="mern__btn">
                    <a
                      href={mern.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      {mern.name}
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
}

export default Mern;
