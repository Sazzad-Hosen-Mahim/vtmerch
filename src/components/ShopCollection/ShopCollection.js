import React from "react";
import "./ShopCollection.css";
import imgBack from "../../assets/Logo/Valuetainment.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const ShopCollection = () => {
  return (
    <section className="shop-collection-section">
      <div className="shop-collection-background">
        <img className="shop-logo filter invert" src={imgBack} alt="" />
      </div>
      <div className="shop-content-container text-white grid grid-cols-4 gap-4">
        <div className="shop-title-container col-span-2">
          <h1 className="uppercase heading-title mb-4">
            Shop <br />
            <span className="stroke-text">Collection</span>
          </h1>
          <button className="view-all uppercase">
            view all{" "}
            <span className="inline-block ml-3 align-middle">
              <FaArrowRightLong />
            </span>
          </button>
          <div className="bag">
            <div className="bag-image">
              <h1 className="uppercase ">The boss collection</h1>
            </div>
          </div>
          <div className="caps-books">
            <div className="caps-image"></div>
            <div className="books-image"></div>
          </div>
        </div>
        <div className="bottle-image-container">
          <div className="bottle-image"></div>
        </div>
        <div className="t-shirt-container ">
          <div className="t-shirt-one"></div>
          <div className="t-shirt-two"></div>
        </div>
        {/* <div className="bg-blue-200 col-span-1">hh</div> */}
      </div>
    </section>
  );
};

export default ShopCollection;
