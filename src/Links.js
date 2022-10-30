import React from "react";
import data from "./data";

const Links = ({ linkData }) => {
  return (
    <div className="links__container">
      {data.map((link, index) => {
        const { id, urlLink, btnText } = link;
        return (
          <a href={urlLink} key={id} className="btn">
            {btnText}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
