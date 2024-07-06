import React from "react";
import logo from "../../../assets/logo.svg";
import el from "../../../assets/elements/element1.svg";

import "./MainSection.css";

const MainSection = () => {
  return (
    <>
      <div className="bg1">
        <div className="container">
          <div className="firstBlock_main ">
            <div className="firstMain_text">
              <p>ПЕРВЫЙ МЕЖДУНАРОДНЫЙ</p>
              <p>Масштабный IT фестиваль</p>
              <h2>CYBER KOL</h2>
              <p>2024 в Центральной Азии</p>
              <p id="firstDate">16 - 17 августа</p>
              {/* ПЕРВЫЙ МЕЖДУНАРОДНЫЙ Масштабный IT фестиваль CYBER KOL 2024 в
        Центральной Азии 16 - 17 августа */}
            </div>
            <img src={logo} alt="error" className="firstBlock_logo" />
          </div>
        </div>
      </div>
      <div className="tearsBlock">
        <img src={el} alt="error" id="el1" />
        <img src={el} alt="error" id="el2" />
      </div>
    </>
  );
};

export default MainSection;
