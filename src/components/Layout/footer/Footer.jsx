import React from "react";
import logo from "../../../assets/logo.svg";
import what from "../../../assets/footer/whatsapp.svg";
import inst from "../../../assets/footer/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footerBlock">
        <div className="footerInfo_Block">
          <div className="footerInfo">
            <img loading="lazy" src={logo} alt="" className="footerLogo" />
            <div className="footerInfo_nav">
              <p>О мероприятии</p>
              <p>Участникам</p>
              <p>Посетителям</p>
              <p>Спонсорам и партнёрам</p>
            </div>
            <div className="footerSocial_Block">
              <a href="https://wa.me/996555060955" target="_blank">
                <img
                  loading="lazy"
                  src={what}
                  alt=""
                  className="footerSocial"
                />
              </a>
              <a
                href="https://www.instagram.com/cyberkol.kg?igsh=MTB3aTl5dXJ4aGp4Nw=="
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={inst}
                  alt=""
                  className="footerSocial"
                />
              </a>
            </div>
          </div>
          <p>© 2024 ItFest Все права зашищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
