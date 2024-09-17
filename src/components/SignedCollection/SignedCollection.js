import React from "react";
import "./SignedCollection.css";
import ImgSignature from "../../assets/img/pat-signature White 1.png";
import BookImage1 from "../../assets/img/img (1).png";
import BookImage2 from "../../assets/img/img (8).png";
import { FaArrowRightLong } from "react-icons/fa6";

const SignedCollection = () => {
  return (
    <section className="signed-collection-section">
      <div className="signed-section-container">
        <div className="article-container relative">
          <div className="signed-heading-text">
            <p className="white-para">PATRICK BET-DAVID'S </p>
            <h1 className="red-para">
              SIGNED <br />
              COLLECTION
            </h1>
            <button className="signed-button">
              SHOP NOW{" "}
              <span className="inline-block ml-3 align-middle">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <div className="signature absolute">
            <img src={ImgSignature} alt="" />
          </div>
        </div>
        <div className="signature-image-container">
          <img className="book-image" src={BookImage1} alt="" />
          <img className="book-image2 mt-9" src={BookImage2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignedCollection;
