import React, { useState } from "react";
import "./CartImageGallery.css";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const CartImageGallery = ({ productImages }) => {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [hovered, setHovered] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex items-center all-image-div">
      <div className="text-3xl up-arrow">
        <BiUpArrowAlt />
      </div>
      <div className="column-images">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="bg-white w-[100px] h-[100px] object-cover cursor-pointer mb-2"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
      <div className="text-3xl down-arrow">
        <BiDownArrowAlt />
      </div>
      <div className="relative">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-[527px] h-[527px] object-cover primary-image rounded-2xl bg-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        />
        {hovered && (
          <div
            className="zoomed-image"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: "200%",
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CartImageGallery;
