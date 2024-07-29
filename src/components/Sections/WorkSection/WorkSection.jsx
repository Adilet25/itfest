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
            </div>
            <div className="workList_item itemRight">
              <p>ИНВЕСТИЦИИ В IT</p>
            </div>
            <div className="workList_item itemLeft">
              <p>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</p>
            </div>
            <div className="workList_item itemRight">
              <p>АВТОРСКОЕ ПРАВО И ПАТЕНТИРОВАНИЕ</p>
            </div>
            <div className="workList_item itemLeft">
              <p>IT ПРОДУКТЫ И ИХ ПРИМЕНЕНИЕ</p>
            </div>
            <div className="workList_item itemRight">
              <p>ЛИЧНЫЙ БРЕНД И ФРИЛАНС</p>
            </div>
            <div className="workList_item itemLeft">
              <p>МАРКЕТИНГ И РЕКЛАМА</p>
            </div>
            <div className="workList_item itemRight">
              <p>МЕНЕДЖМЕНТ И ПРОДАЖИ</p>
            </div>
            <div className="workList_item itemLeft">
              <p>ИННОВАЦИИ В ТУРИЗМЕ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
