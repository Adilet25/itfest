import React from "react";
import resimg from "../../../assets/resimg.svg";
import inno from "../../../assets/inno.svg";
import planetlogo from "../../../assets/elements/planet.svg";
import el3 from "../../../assets/elements/el3.svg";
import logo1 from "../../../assets/sponsorslogo/jk.png";
import logo6 from "../../../assets/sponsorslogo/logo6.svg";
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
              <p id="firstDate">13 - 14 сентября</p>
            </div>
            <img src={el3} alt="" id="el3" className="mainBgColor" />

            <img
              src={planetlogo}
              alt="error"
              id="planet1"
              className="firstBlock_logo"
            />
          </div>
          <div className="secondBlock_org">
            <p id="secondBlock_text">Организаторы</p>
            <div className="secondBlock_sponsors">
              <img src={inno} alt="error" className="logopat2" />
              {/* <img src={logo2} alt="" className="logobig" /> */}
              <img src={logo1} alt="" className="logopat"/>
              {/* <img src={resimg} alt="" className="logobig" /> */}
              <img src={logo6} alt="" className="logopat"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
