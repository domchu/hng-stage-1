import React from "react";
import ProfileImg from "../src/Images/profile-img.png";
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
      </div>
    </>
  );
}

export default App;
