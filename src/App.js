import React from "react";
import ProfileImg from "../src/Images/profile-img.png";
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
    </>
  );
}

export default App;
