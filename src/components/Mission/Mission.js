import React from "react";
import "./Mission.css";
import MissionImage from "../../assets/img/img (5).png";
import QuotesLogo from "../../assets/Icon/quotes.svg";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-text-container">
        <img className="quotes-image" src={QuotesLogo} alt="" />
        <p className="mission-para uppercase">
          Our mission is to enlighten, entertain <br />
          and empower current and future <br />
          leaders around the world.
        </p>
      </div>
      <div className="mission-image-container">
        <img className="mission-image" src={MissionImage} alt="" />
      </div>
    </div>
  );
};

export default Mission;
