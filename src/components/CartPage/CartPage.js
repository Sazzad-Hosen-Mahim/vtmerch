import React from "react";
import "./CartPage.css";
import image1 from "../../assets/img/Product-images/1.png";
import image2 from "../../assets/img/Product-images/2.png";
import image3 from "../../assets/img/Product-images/3.png";
import image4 from "../../assets/img/Product-images/4.png";
import CartImageGallery from "./CartImageGallery/CartImageGallery";

const productImages = [image1, image2, image3, image4];

const CartPage = () => {
  return (
    <section className="cart-section">
      <div className="cart-section-content">
        <h1 className="uppercase products-of-month">
          Product of <span>the month</span>
        </h1>
        <div className="cart-content grid grid-cols-2 gap-4 border-2 border-purple-600">
          <div className="image-gallery">
            <CartImageGallery productImages={productImages}></CartImageGallery>
          </div>
          <div>aggfgr</div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
