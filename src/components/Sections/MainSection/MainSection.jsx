import React from "react";
import inno from "../../../assets/partnerslogo/inno.svg";
import planetlogo from "../../../assets/elements/planet.svg";
import el3 from "../../../assets/elements/el3.svg";
import adm from "../../../assets/partnerslogo/adm.svg";
import mer from "../../../assets/partnerslogo/mer.png";
import udp from "../../../assets/partnerslogo/udp.svg";
import kia from "../../../assets/partnerslogo/kial.svg";
import htp from "../../../assets/partnerslogo/htp.svg";
import jkm from "../../../assets/partnerslogo/jkm.svg";
import imp from "../../../assets/partnerslogo/imp.svg";

import logo6 from "../../../assets/partnerslogo/logo6.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./MainSection.css";

const MainSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#planet1",
      {
        y: -10,
      },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
      }
    );
    gsap.fromTo(
      ".firstBlock_main",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondBlock_org",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <>
      <div className="bg1">
        <div className="container">
          <div className="firstBlock_main ">
            <div className="firstMain_text">
              <p>
                <span className="fs1">ПЕРВЫЙ </span>
                МЕЖДУНАРОДНЫЙ
                <br /> МАСШТАБНЫЙ IT ФЕСТИВАЛЬ
              </p>
              <h2>CYBER KYRGYZSTAN</h2>
              <p>2024 в Центральной Азии</p>
              <p id="firstDate">28 - 29 сентября</p>
            </div>
            <img
              loading="lazy"
              src={el3}
              alt=""
              id="el3"
              className="mainBgColor"
            />

            <img
              src={planetlogo}
              alt="error"
              id="planet1"
              className="firstBlock_logo"
            />
          </div>
          <div className="logobigm">
            <p className="secondBlock_text">
              МЕРОПРИЯТИЕ ПРОВОДИТСЯ <br /> ПРИ ПОДДЕРЖКЕ
            </p>
            <div className="logobigb">
              <img loading="lazy" src={kia} alt="error" className="logobigbb" />
              <img
                loading="lazy"
                src={udp}
                alt="error"
                className="logobigbb2"
              />
              <img loading="lazy" src={jkm} alt="" className="logobigbb" />
              <img loading="lazy" src={imp} alt="" className="logobigbb" />
            </div>
          </div>
          <div className="secondBlock_org">
            <p className="secondBlock_text">Организаторы</p>
            <div className="secondBlock_sponsors">
              <img loading="lazy" src={mer} alt="error" className="logobig" />
              <img loading="lazy" src={logo6} alt="error" className="logobig" />
              <img loading="lazy" src={adm} alt="error" className="logopat" />
              <img loading="lazy" src={htp} alt="error" className="logopat" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
