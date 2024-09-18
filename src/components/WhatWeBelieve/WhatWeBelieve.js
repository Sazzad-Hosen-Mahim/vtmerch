import React from "react";
import "./WhatWeBelieve.css";
import imgBack from "../../assets/Logo/Valuetainment.svg";
import imgCar from "../../assets/img/img (10).png";
import chessQueen from "../../assets/img/img (3).png";

const data = [
  {
    id: 1,
    title: "Leadership",
    description:
      "is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.",
  },
  {
    id: 2,
    title: "Entrepreneurs",
    description:
      "are heroes who should be respected and celebrated for taking risks, launching products, creating jobs and building companies.",
  },
  {
    id: 3,
    title: "Capitalism",
    description:
      "is a critically important economic system that has advanced society and the quality of life we enjoy today.",
  },
  {
    id: 4,
    title: "Debate",
    description:
      "is welcome and necessary as it can lead to consensus, epiphanies, and expose the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and objective processing of issues, everyone wins. Free speech is critical to productive debate.",
  },
];

const WhatWeBelieve = () => {
  return (
    <section className="believe-section">
      <div className="believe-logo-container ">
        <img className="believe-logo" src={imgBack} alt="" />
      </div>
      <div className="believe-content-container">
        <h1 className="uppercase believe-text">What we believe</h1>
        <img className="img-car" src={imgCar} alt="" />
        <div className="believe-text-content mt-6">
          {data.map(({ id, title, description }) => {
            return (
              <div key={id} className="mb-7">
                <div className="believe-text-container mb-7 text-white">
                  <p className="believe-para ">
                    <span className="believe-heading mr-1 inline-block">
                      {title}
                    </span>
                    <span className="opacity-80">{description}</span>
                  </p>
                </div>
                <hr className=""></hr>
              </div>
            );
          })}
        </div>
      </div>
      <img className="chess-queen" src={chessQueen} alt="" />
    </section>
  );
};

export default WhatWeBelieve;
