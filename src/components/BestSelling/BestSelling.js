import React from "react";
import "./BestSelling.css";
import CommonCards from "../CommonCards/CommonCards";

const BestSelling = () => {
  return (
    <div className="best-selling-section relative">
      <div className="best-selling-content absolute">
        <div>
          <p className="paragraph uppercase">buy 1 get 1 free</p>
          <p className="paragraph">
            ON{" "}
            <span className="transparent-text uppercase">
              best selling products
            </span>
          </p>
        </div>
        <div className="best-selling-card-container">
          <CommonCards></CommonCards>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
