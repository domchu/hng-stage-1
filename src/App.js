import React from "react";
import ProfileImg from "../src/Images/profile-img.png";
import vector from "../src/Images/Vector.png";
import Progress from "../src/Images/I4G.png";
import FooterText from "../src/Images/footer-text.png";
import Links from "./Links";
import { BsGithub } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
function App() {
  return (
    <>
      <div className="page-container">
        <div className="profile__img__container">
          <div>
            <img src={ProfileImg} alt="profile " className="profile__img" />
          </div>
          <div>
            <h3>Annette Black</h3>
          </div>
        </div>
        <Links />
        <div className="icon__container">
          <BsSlack className="slack" />
          <BsGithub className="slack" />
        </div>
      </div>
      <footer className="footer__container">
        <div className="footer-1">
          <img src={vector} alt="" />
        </div>
        <div className="footer-1">
          <img src={FooterText} alt="" />
        </div>
        <div className="footer-1">
          <img src={Progress} alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
