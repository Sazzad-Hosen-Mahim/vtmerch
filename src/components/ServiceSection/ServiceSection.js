import React from "react";
import "./ServiceSection.css";
import { FaShippingFast } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-section-container grid grid-cols-4">
        <div className="shipping text-white flex flex-col mr-[93px]">
          <p className="mb-6">
            <FaShippingFast className="w-[40px] h-[40px]" />
          </p>
          <h1
            style={{ fontFamily: "Montserrat bold" }}
            className="text-[24px] mb-3"
          >
            Shipping
          </h1>
          <p>
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div className="shipping text-white flex flex-col mr-[93px]">
          <p className="mb-6">
            <GiCardExchange className="w-[40px] h-[40px]" />
          </p>
          <h1
            style={{ fontFamily: "Montserrat bold" }}
            className="text-[24px] mb-3"
          >
            Return
          </h1>
          <p>
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div className="shipping text-white flex flex-col mr-[93px]">
          <p className="mb-6">
            <TfiHeadphoneAlt className="w-[40px] h-[40px]" />
          </p>
          <h1
            style={{ fontFamily: "Montserrat bold" }}
            className="text-[24px] mb-3"
          >
            Support
          </h1>
          <p>
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
        <div className="shipping text-white flex flex-col mr-[93px]">
          <p className="mb-6">
            <FaMoneyCheckDollar className="w-[40px] h-[40px]" />
          </p>
          <h1
            style={{ fontFamily: "Montserrat bold" }}
            className="text-[24px] mb-3"
          >
            Payment
          </h1>
          <p>
            The attention to detail is evident in every aspect of this backpack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
