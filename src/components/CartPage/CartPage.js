import React, { useState } from "react";
import "./CartPage.css";
import image1 from "../../assets/img/Product-images/1.png";
import image2 from "../../assets/img/Product-images/2.png";
import image3 from "../../assets/img/Product-images/3.png";
import image4 from "../../assets/img/Product-images/4.png";
import CartImageGallery from "./CartImageGallery/CartImageGallery";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const productImages = [image1, image2, image3, image4];

const CartPage = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  return (
    <section className="cart-section">
      <div className="cart-section-content">
        <h1 className="uppercase products-of-month">
          Product of <span>the month</span>
        </h1>
        <div className="cart-content grid grid-cols-2 ">
          <div className="image-gallery">
            <CartImageGallery productImages={productImages}></CartImageGallery>
          </div>
          <div className=" cart-content-text">
            <h1 className="cart-content-heading">
              Premium Valuetainment Leather Backpack
            </h1>
            <p className="cart-content-para">
              The attention to detail is evident in every aspect of this
              backpack. From the sturdy hardware and reinforced stitching to the
              smooth zippers and luxurious lining, no detail has been
              overlooked.
            </p>
            <p className="cart-content-price">
              Price: <span className="text-[#EA2127]">$ 199.95</span>
            </p>
            <div className="cart-content-size flex items-center mb-6">
              <p className="cart-content-size me-3">Size:</p>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`border border-gray-400 px-4 py-2 
            ${
              activeSize === size ? "bg-black text-white" : "bg-none text-black"
            }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="mb-3 cart-quantity-text">Quantity:</p>
            <div className="flex items-center mb-6">
              <button
                onClick={handleDecrement}
                className="border border-black px-4 py-2 bg-gray-100 text-black"
              >
                -
              </button>
              <span className=" font-semibold border border-black  px-4 py-2">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="border border-black px-4 py-2 bg-gray-100 text-black"
              >
                +
              </button>
            </div>
            <div className="flex items-center mb-6">
              <button className="uppercase add-to-cart">Add to cart</button>
              <button className="uppercase buy-it-now">Buy it now</button>
            </div>
            <div className="flex share mb-6">
              <h1 className="me-3">Share:</h1>
              <div className="flex gap-2 items-center align-middle">
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaLinkedin />
                </p>
                <p>
                  <FaInstagram />
                </p>
              </div>
            </div>
            <div className="font-['inter'] font-[16px] w-[94px] my-1 border-b-2 border-black">
              <h1>View Details</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
