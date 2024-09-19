import React from "react";
import "./Future.css";
import purpleImgae from "../../assets/img/img (1).jpeg";
import capImage from "../../assets/img/img (5).jpeg";

const Future = () => {
  return (
    <section className="future-section-container">
      <div className="future-container grid grid-cols-3 gap-6">
        <div className="first-future-div">
          <div className="future-text">
            <h1 className="uppercase future-looks-bright">
              Future looks bright
            </h1>
            <p className="uppercase purple-gold">
              <span className="text-[#7F1BCD]">purple</span>{" "}
              <span className="and">&</span>{" "}
              <span className="text-[#E0A408]">gold </span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #222222",
                }}
              >
                series
              </span>
            </p>
          </div>
        </div>
        <div className="future-image-card">
          <img className="future-image image-one" src={purpleImgae} alt="" />
          <div>
            <h1 className="font-['inter'] font-bold mb-1">
              FLB Shirt - Purple
            </h1>
            <p className="font-['inter'] font-bold">
              $ 34.95 <del className="text-[#9B9B9B] ml-2">$ 34.95</del>
            </p>
          </div>
        </div>
        <div className="future-image-card">
          <img className="future-image" src={capImage} alt="" />
          <div>
            <h1 className="font-['inter'] font-bold mb-1">FLB Cap - Purple</h1>
            <p className="font-['inter'] font-bold">
              $ 34.95 <del className="text-[#9B9B9B] ml-2">$ 34.95</del>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
