import React from "react";
import "./BestSelling.css";
import CommonCards from "../CommonCards/CommonCards";

const BestSelling = () => {
  return (
    <div className="best-selling-section relative">
      <div className="best-selling-content absolute">
        <div>
          <p className="paragraph">BUY 1 GET 1 FREE</p>
          <p className="paragraph">
            ON <span className="transparent-text">BEST SELLING PRODUCTS</span>
          </p>
        </div>
        <div>
          <CommonCards></CommonCards>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
