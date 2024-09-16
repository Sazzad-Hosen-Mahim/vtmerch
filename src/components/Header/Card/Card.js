import React from "react";
import "./Card.css";
import Img1 from "../../../assets/img/img (9).png";
import Img2 from "../../../assets/img/img (10).png";
import Img3 from "../../../assets/img/img (11).jpeg";
import Img4 from "../../../assets/img/img (11).png";
import Img5 from "../../../assets/img/img (11).jpeg";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Army Green Active Short Sleeve",
    pricing: "34.95",
  },
  {
    id: 2,
    img: Img2,
    title: "Army Green Active Short Sleeve",
    pricing: "67.95",
  },
  {
    id: 3,
    img: Img3,
    title: "Army Black Active Full Sleeve",
    pricing: "67.55",
  },
  {
    id: 4,
    img: Img4,
    title: "Army Green Active Short Sleeve",
    pricing: "89.55",
  },
  {
    id: 5,
    img: Img5,
    title: "Army Black Active Full Sleeve",
    pricing: "67.55",
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {data.map(({ id, img, title, pricing }) => {
        return (
          <div key={id} className="each-card">
            <div className="image-container w-full h-[397px]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={img}
                alt=""
              />
            </div>
            <div className="content">
              <p className="text-white">{title}</p>
              <p className="text-white">
                $ {pricing}
                <span className="ml-3">
                  <del>{pricing}</del>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
