import React from "react";
// import ai from "../../../assets/workimg/ai.png";
// import ad from "../../../assets/workimg/ad.png";
// import author from "../../../assets/workimg/author.png";
// import cyber from "../../../assets/workimg/cyber.png";
// import inno from "../../../assets/workimg/inno.png";
// import inv from "../../../assets/workimg/inv.png";
// import itprod from "../../../assets/workimg/itprod.png";
// import ownbrand from "../../../assets/workimg/ownbrand.png";
// import manage from "../../../assets/workimg/manage.png";

import "./WorkSection.css";

const WorkSection = () => {
  return (
      <div className="container">
        <div className="workBlock_main">
          <h2 className="workBlock_title">ТЕМЫ ВОРКШОПОВ</h2>
          <div className="workBlock_list">
            <div className="workList_item item1">
              <p>ИНВЕСТИЦИИ В IT</p>
            </div>
            <div className="workList_item item2">
              <p>КИБЕРБЕЗОПАСНОСТЬ</p>
            </div>
            <div className="workList_item item3">
              <p>АВТОРСКОЕ ПРАВО И ПАТЕНТИРОВАНИЕ</p>
            </div>
            <div className="workList_item item4">
              <p>ЛИЧНЫЙ БРЕНД И ФРИЛАНС</p>
            </div>
            <div className="workList_item item5">
              <p>IT ПРОДУКТЫ И ИХ ПРИМЕНЕНИЕ</p>
            </div>
            <div className="workList_item item6">
              <p>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</p>
            </div>
            <div className="workList_item item7">
              <p>МАРКЕТИНГ И РЕКЛАМА</p>
            </div>
            <div className="workList_item item8">
              <p>МЕНЕДЖМЕНТ И ПРОДАЖИ</p>
            </div>
            <div className="workList_item item9">
              <p>ИННОВАЦИИ В ТУРИЗМЕ</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WorkSection;
