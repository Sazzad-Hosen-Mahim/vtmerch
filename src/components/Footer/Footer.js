import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/Logo/Valuetainment.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import logo1 from "../../assets/Icon/visa 1.svg";
import logo2 from "../../assets/Icon/apple-pay 1.svg";
import logo3 from "../../assets/Icon/diners-club 1.svg";
import logo4 from "../../assets/Icon/visa 2.svg";
import logo5 from "../../assets/Icon/amex 1.svg";
import logo6 from "../../assets/Icon/paypal 1.svg";
import logo7 from "../../assets/Icon/american-express (1) 1.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <div className="logo-and-text flex mb-8">
          <div className="align-middle">
            <img src={footerLogo} alt="" className="footer-logo" />
          </div>
          <div className="footer-heading align-middle">VTMERCH</div>
        </div>
        <hr />
        <div className="grid grid-cols-5 gap-24 mt-12">
          <div className=" col-span-2">
            <h1 className="font-['Montserrat'] text-[24px] text-white mb-12">
              Subscribe and be the first to receive notifications about our
              upcoming releases and the latest news.{" "}
            </h1>
            <div>
              <button className=" font-['inter-bold'] w-full border-[1px] p-3 rounded-xl text-white hover:bg-indigo-600 hover:text-black hover:border-none">
                Enter your email
              </button>
              <button className="font-['inter-bold'] mt-4 w-full border-[1px] p-3 gap-2 bg-white text-black rounded-xl hover:bg-yellow-300 hover:text-white hover:border-none ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="footer-column">
            <h1 className="text-2xl font-['inter'] text-white">
              Customer Services
              <ul className="mt-6 text-[16px] opacity-80">
                <li className="mb-2">About Us</li>
                <li className="mb-2">Search</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Contact Us</li>
                <li className="mb-2">Terms of Service</li>
                <li className="mb-2">Refund Policy</li>
                <li className="mb-2">Track Order</li>
              </ul>
            </h1>
          </div>
          <div className=" footer-column ">
            <h1 className="text-2xl font-['inter'] text-white">
              Products
              <ul className="mt-6 text-[16px] opacity-80">
                <li className="mb-2">Featured Products</li>
                <li className="mb-2">Bestseller</li>
                <li className="mb-2">Latest Product</li>
                <li className="mb-2">All Collections</li>
                <li className="mb-2">All Products</li>
              </ul>
            </h1>
          </div>
          <div className="">
            <h1 className="text-2xl font-['inter'] text-white">
              Contact Us
              <ul className="mt-6 text-[16px] opacity-80">
                <li className="mb-3 ">
                  Available between 8AM to 8PM. Ready to answer your questions.
                </li>
                <li className="mb-2 flex items-center align-middle gap-3">
                  <FiPhone className="mb-[0.5px]" /> <span>0123456789</span>
                </li>
                <li className="mb-4 flex items-center align-middle gap-3">
                  <MdOutlineEmail className="mb-[0.5px]" />{" "}
                  <span>store@Valuetainment.com</span>
                </li>
              </ul>
              <div className=" flex items-center align-middle gap-3">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
              </div>
            </h1>
          </div>
        </div>
        <div className="last-elements 2xl:mt-20 xl:mt-20 text-white flex justify-between">
          <div className="opacity-80">
            © 2024 Valuetainment Store. All rights reserved.
          </div>
          <div className="h-[21px] flex gap-2">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
