import React from "react";
import "./CommonCards.css";
import img1 from "../../assets/img/img (4).jpeg";
import img2 from "../../assets/img/img (6).jpeg";
import img3 from "../../assets/img/img (7).jpeg";
import img4 from "../../assets/img/img (10).jpeg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Army Green Active Cap",
    pricing: 34.56,
  },
  {
    id: 2,
    image: img2,
    title: "Army Green Active Cap",
    pricing: 34.56,
  },
  {
    id: 3,
    image: img3,
    title: "Army Green Active Cap",
    pricing: 34.56,
  },
  {
    id: 4,
    image: img4,
    title: "Army Green Active Cap",
    pricing: 34.56,
  },
];

const CommonCards = () => {
  return (
    <div className="best-selling-card-container">
      {data.map(({ id, image, title, pricing }) => {
        return (
          <div key={id} className="single-card">
            <div className="best-selling-image-container">
              <img
                className="best-selling-card-image w-full h-full object-cover rounded-3xl "
                src={image}
                alt=""
              />
            </div>
            <div className="best-selling-content">
              <p className="best-selling-title font-bold">{title}</p>
              <p className="best-selling-pricing font-bold">
                $ {pricing}{" "}
                <del>
                  <span className="ml-3 best-selling-pricing font-bold">
                    $ {pricing}
                  </span>
                </del>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommonCards;
