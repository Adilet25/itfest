import React from "react";
import resimg from "../../../assets/resimg.svg";
import logo1 from "../../../assets/sponsorslogo/logo1.svg";
import logo2 from "../../../assets/sponsorslogo/logo2.svg";
import logo3 from "../../../assets/sponsorslogo/logo3.svg";
import logo4 from "../../../assets/sponsorslogo/logo4.svg";
import logo5 from "../../../assets/sponsorslogo/logo5.svg";
import logo6 from "../../../assets/sponsorslogo/logo6.svg";
import logo7 from "../../../assets/sponsorslogo/logo7.svg";
import logo8 from "../../../assets/sponsorslogo/logo8.svg";

import "../SecondSection/SecondSection.css";

const SecondSection = () => {
  return (
    <div className="bg3">
      <div className="secondBlock_main">
        <div className="secondMain_first">
          <h2>О мероприятии</h2>
          <p>
            IT FEST 2024 "CYBER КӨЛ" — это крупнейшее технологическое событие в
            Кыргызстане, посвященное инновациям в сфере информационных
            технологий.
          </p>
          <p>
            Организуемое в формате фестиваля, IT FEST собирает ведущих
            специалистов, стартапы, инвесторов, студентов и энтузиастов
            технологий для обмена опытом, демонстрации последних технологических
            достижений и создания новых партнерских связей.
          </p>
        </div>
        <div className="secondMain_second">
          <img src={resimg} alt="error" id="secondBlock_img" />
          <div className="secondBlock_org">
            <p id="secondBlock_text">Организаторы</p>
            <div className="secondBlock_sponsors">
              <img src={logo4} alt="" />
              <img src={logo2} alt="" />
              <img src={logo6} alt="" />
              <img src={logo8} alt="" />
              <img src={logo3} alt="" />
              <img src={logo1} alt="" />
              <img src={logo7} alt="" />
            </div>
          </div>
        </div>
        <div className="secondMain_third">
          <div>
            <p className="fs2">2 </p>
            <p>дня</p>{" "}
          </div>
          <div>
            <p className="fs2">7000 </p>
            <p>посетителей</p>{" "}
          </div>
          <div>
            <p className="fs2">12+ </p>
            <p>направлений</p>{" "}
          </div>
          <div>
            <p className="fs2">3000 </p>
            <p>участников</p>{" "}
          </div>
          <div>
            <p className="fs2">10 </p>
            <p>тематических зон</p>{" "}
          </div>
          <div>
            <p className="fs2">30+ </p>
            <p>спикеров</p>{" "}
          </div>
          <div>
            <p className="fs2">5 </p>
            <p>стран</p>{" "}
          </div>
          <div>
            <p className="fs2">3 000 000 </p>
            <p>медиа охватов</p>{" "}
          </div>
          <div>
            <p className="fs2">1500 </p>
            <p>кв. м экспозиций</p>{" "}
          </div>
        </div>
        <div className="secondBlock_org2">
          <p id="secondBlock_text">Организаторы</p>
          <div className="secondBlock_sponsors2">
            <img src={logo4} alt="" />
            <img src={logo2} alt="" />
            <img src={logo6} alt="" />
            <img src={logo8} alt="" />
            <img src={logo3} alt="" />
            <img src={logo1} alt="" />
            <img src={logo7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
