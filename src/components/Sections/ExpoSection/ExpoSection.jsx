import React from "react";
import expo1 from "../../../assets/expoimg/expo1.png";
import expo2 from "../../../assets/expoimg/expo2.png";
import cassa from "../../../assets/expoimg/cassa.png";
import sale from "../../../assets/expoimg/sale.svg";

import "./ExpoSection.css";

const ExpoSection = () => {
  return (
    <div className="bg6">
      <div className="container">
        <div className="expoBlock_main">
          <div>
            <img src={expo1} alt="error" className="expoBlock_img" />
            <div className="expoBlock_info infoBlock1">
              <img src={cassa} alt="error" className="expoCassa" />
              <h3>Стандарт</h3>
              <h5>21 000 сом</h5>
              <h4>30 000 сом</h4>
              <ul>
                <li>Выставочное место: 3x2 м</li>
                <li>Электричество и освещение</li>
                <li>Удлинитель</li>
                <li>Размещение логотипа на сайте и в публикации в Instagram</li>
                <li>Размещение логотипа на 6 LED экранах 1 бейдж участника</li>
                <li>2 пригласительных билета на концерт (фан-зона)</li>
                <li>Сертификат участия</li>
              </ul>
              <img src={sale} alt="error" className="expoSale_img" />
            </div>
          </div>
          <div>
            <img src={expo2} alt="error" className="expoBlock_img" />
            <div className="expoBlock_info infoBlock2">
              <img src={cassa} alt="error" className="expoCassa" />
              <h3>Голд</h3>
              <h5>49 000 сом</h5>
              <h4>70 000 сом</h4>
              <ul>
                <li>Выставочное место: 6x3 м</li>
                <li>Электричество и освещение</li>
                <li>Удлинитель</li>
                <li>Размещение логотипа на сайте и в публикации в Instagram</li>
                <li>Размещение логотипа на 6 LED экранах</li>
                <li>2 бейдж участника</li>
                <li>Сертификат участия</li>
                <li>Участие в B2B встречах</li>
                <li>3 пригласительных билета на концерт (сидячие места)</li>
                <li>Возможность раздачи буклетов при регистрации</li>
                <li>База контактных данных участников турнира</li>
                <li>Гала ужин</li>
              </ul>
              <img src={sale} alt="error" className="expoSale_img" />
            </div>
          </div>
        </div>
        <div className="expoBtn_block">
          <button className="expoBtn">Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default ExpoSection;
