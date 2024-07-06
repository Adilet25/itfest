import React from "react";
import logo1 from "../../../assets/workimg/logo1.svg";
import logo2 from "../../../assets/workimg/logo2.svg";
import logo3 from "../../../assets/workimg/logo3.svg";
import logo4 from "../../../assets/workimg/logo4.svg";
import logo5 from "../../../assets/workimg/logo5.svg";
import logo6 from "../../../assets/workimg/logo6.svg";
import logo7 from "../../../assets/workimg/logo7.svg";
import logo8 from "../../../assets/workimg/logo8.svg";
import logo9 from "../../../assets/workimg/logo9.svg";

import "./WorkSection.css";

const WorkSection = () => {
  return (
    <div className="bg8">
      <div className="container">
        <div className="workBlock_main">
          <h2 className="workBlock_title">ТЕМЫ ВОРКШОПОВ</h2>
          <div className="workBlock_list">
            <div className="workList_item itemLeft">
              <p>КИБЕРБЕЗОПАСНОСТЬ</p>
              <div className="workList_circle leftImg">
                <img src={logo1} alt="error" className="workList_img" />
              </div>
            </div>
            <div className="workList_item itemRight">
              <div className="workList_circle rightImg">
                <img src={logo2} alt="error" className="workList_img" />
              </div>
              <p>ИНВЕСТИЦИИ В IT</p>
            </div>
            <div className="workList_item itemLeft">
              <p>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</p>
              <div className="workList_circle leftImg">
                <img src={logo3} alt="error" className="workList_img" />
              </div>
            </div>
            <div className="workList_item itemRight">
              <div className="workList_circle rightImg">
                <img src={logo4} alt="error" className="workList_img" />
              </div>
              <p>АВТОРСКОЕ ПРАВО И ПАТЕНТИРОВАНИЕ</p>
            </div>
            <div className="workList_item itemLeft">
              <p>IT ПРОДУКТЫ И ИХ ПРИМЕНЕНИЕ</p>
              <div className="workList_circle leftImg">
                <img src={logo5} alt="error" className="workList_img" />
              </div>
            </div>
            <div className="workList_item itemRight">
              <div className="workList_circle rightImg">
                <img src={logo6} alt="error" className="workList_img" />
              </div>
              <p>ЛИЧНЫЙ БРЕНД И ФРИЛАНС</p>
            </div>
            <div className="workList_item itemLeft">
              <p>МАРКЕТИНГ И РЕКЛАМА</p>
              <div className="workList_circle leftImg">
                <img src={logo7} alt="error" className="workList_img" />
              </div>
            </div>
            <div className="workList_item itemRight">
              <div className="workList_circle rightImg">
                <img src={logo8} alt="error" className="workList_img" />
              </div>
              <p>МЕНЕДЖМЕНТ И ПРОДАЖИ</p>
            </div>
            <div className="workList_item itemLeft">
              <p>ИННОВАЦИИ В ТУРИЗМЕ</p>
              <div className="workList_circle leftImg">
                <img src={logo9} alt="error" className="workList_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
