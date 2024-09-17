import React from "react";
import "./NewArrival.css";
import CommonCards from "../CommonCards/CommonCards";

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      <div className="new-arrival-all-content">
        <div className="new-arrival-text-container">
          <h1>NEW ARRIVAL</h1>
        </div>
        <div className="new-arrival-cards-container">
          <CommonCards></CommonCards>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
