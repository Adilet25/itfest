import React from "react";
import logo from "../../../assets/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg2">
      <div className="container">
        <div className="navBlock_main">
          <img src={logo} alt="error" className="navBlock_logo" />
          <div>
            <p className="navBlock_nav">О мероприятии</p>
          </div>
          <div>
            <p className="navBlock_nav">Участникам</p>
          </div>
          <div>
            <p className="navBlock_nav">Посетителям</p>
          </div>
          <div>
            <p className="navBlock_nav">Спонсорам и партнёрам</p>
          </div>
          <p className="navBlock_nav">Регистрация</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
