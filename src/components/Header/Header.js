import React from "react";
import "./Header.css";
import Card from "./Card/Card";

const Header = () => {
  return (
    <div className="header-section">
      <div className="upper-section flex justify-between">
        <div className="flex">
          <div>Logo</div>
          <div>VTMERCH</div>
        </div>
        <div>Bread Icons</div>
      </div>
      {/* upper section end */}
      <div>
        <p className="background-text">Future Looks Brights!</p>
        <Card></Card>
      </div>
    </div>
  );
};

export default Header;
