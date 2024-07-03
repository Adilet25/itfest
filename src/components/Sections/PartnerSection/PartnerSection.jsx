import React from "react";
import logo1 from "../../../assets/partnerslogo/logo1.svg";
import logo2 from "../../../assets/partnerslogo/logo2.svg";
import logo3 from "../../../assets/partnerslogo/logo3.svg";
import logo4 from "../../../assets/partnerslogo/logo4.svg";
import logo5 from "../../../assets/partnerslogo/logo5.svg";
import logo6 from "../../../assets/partnerslogo/logo6.svg";
import logo7 from "../../../assets/partnerslogo/logo7.svg";

import "./PartnerSection.css";

const PartnerSection = () => {
  return (
    <div className="bg4">
      <div className="partnerBlock_main">
        <div className="partnerBlock_mini partnerMini_1">
          <h2>Партнёры</h2>
          <div className="parnterBlock_imgs">
            <img src={logo3} alt="error" />
            <img src={logo6} alt="error" />
            <img src={logo7} alt="error" />
          </div>
        </div>
        <div className="partnerBlock_mini partnerMini_2">
          <h2>Медиа партнёры</h2>
          <div className="parnterBlock_imgs">
            <img src={logo5} alt="error" />
          </div>
        </div>
        <div className="partnerBlock_mini partnerMini_3">
          <h2>Horeca партнёры</h2>
          <div className="parnterBlock_imgs">
            <img src={logo4} alt="error" />
            <img src={logo1} alt="error" />
            <img src={logo2} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
