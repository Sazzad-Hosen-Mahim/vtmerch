import React from "react";
import "./Header.css";
import Card from "./Card/Card";
import LogoImage from "../../assets/Logo/Valuetainment.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="header-section">
      <div className="upper-section flex justify-between">
        <div className="flex left-header-content">
          <div className="align-middle">
            <img
              className="logo filter invert text-white"
              src={LogoImage}
              alt=""
            />
          </div>
          <div className="heading text-white align-middle">VTMERCH</div>
        </div>
        <div className="burger-icon text-white">
          <RxHamburgerMenu />
        </div>
      </div>
      <div>
        <p className="background-text">Future Looks Brights!</p>
        <Card></Card>
      </div>
    </div>
  );
};

export default Header;
