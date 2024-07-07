import React from "react";
import showimg from "../../../assets/headliners.png";
import show12 from "../../../assets/show/show1.2.png";
import show11 from "../../../assets/show/show1.1.png";
import show21 from "../../../assets/show/show2.1.png";
import show22 from "../../../assets/show/show2.2.png";
import show31 from "../../../assets/show/show3.1.png";
import show32 from "../../../assets/show/show3.2.png";
import show41 from "../../../assets/show/show4.1.png";
import show42 from "../../../assets/show/show4.2.png";
import show51 from "../../../assets/show/show5.1.png";
import show52 from "../../../assets/show/show5.2.png";
import show6 from "../../../assets/show/show6.png";
import show71 from "../../../assets/show/show7.1.png";
import show72 from "../../../assets/show/show7.2.png";
import show81 from "../../../assets/show/show8.1.png";
import show82 from "../../../assets/show/show8.2.png";

import "./SpeakersSection.css";

const SpeakersSection = () => {
  return (
    <div className="bg9">
      <div className="container">
        <div className="speakBlock_main">
          <h2 className="speakBlock_title">СПИКЕРЫ</h2>
          <div className="speakList">
            <div className="speakBlock_card">
              <div className="speakBlock_circle"></div>
              <h3>Искенов Даурен</h3>
              <p>
                Рарзаробтчик онлайн игр со стажем более 10лет.Главный
                разработчик компании Ubisoft.
              </p>
            </div>
            <div className="speakBlock_card">
              <div className="speakBlock_circle"></div>
              <h3>Соколовский Олег</h3>
              <p>
                Знаменитый блогер/маркетолог в европе и по совместительству
                разработчик веб-приложний с опытом в крупных компаний мира.
              </p>
            </div>
            <div className="speakBlock_card">
              <div className="speakBlock_circle"></div>
              <h3>Сон Тэхун</h3>
              <p>
                Мотиватор,Олимпийский чемпион по Тэквандо
                (ITF,WTF),Прожект,Проект менеджер а так же Tим-Лид одного из
                общеизвестных групп программистов.
              </p>
            </div>
            <div className="speakBlock_card">
              <div className="speakBlock_circle"></div>
              <h3>Ederson Dos Santos</h3>
              <p>
                Разработчик известных мобильных приложений таких как
                YouTube,Instagram,Facebook и Whatsapp.Бывший сотрудник крупных
                компаний а имеено:Google,Miccrosoft и Meta
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="showBlock_main">
        <h2 className="showBlock_title">ШОУ-ПРОГРАММА</h2>
        <h3 className="showBlock_title2">Хэдлайнеры</h3>
        <img src={showimg} alt="error" className="showBlock_img" />
        <div className="showBlock_info show1">
          <img src={show11} alt="" className="showimg showimg11" />
          КОСПЛЕЙ <br /> ДЕФИЛЕ
          <img src={show12} alt="" className="showimg showimg12" />
        </div>
        <div className="showBlock_info show2">
          <img src={show21} alt="" className="showimg showimg21" />
          ИНСТАЛЛЯЦИИ
          <br />И АРТ ОБЬЕКТЫ
          <img src={show22} alt="" className="showimg showimg22" />
        </div>
        <div className="showBlock_info show3">
          <img src={show31} alt="" className="showimg showimg31" />
          КИНОТЕАТР ПОД
          <br />
          ОТКРЫТЫМ НЕБОМ
          <img src={show32} alt="" className="showimg showimg32" />
        </div>
        <div className="showBlock_info show4">
          <img src={show41} alt="" className="showimg showimg41" />
          ФОТОБУДКА
          <img src={show42} alt="" className="showimg showimg42" />
        </div>
        <div className="showBlock_info show5">
          <img src={show51} alt="" className="showimg showimg51" />
          АНИМАТОРЫ
          <img src={show52} alt="" className="showimg showimg52" />
        </div>
        <div className="showBlock_info show6">
          <img src={show6} alt="" className="showimg showimg6" />
          <div className="infoEsp_block ">
            <div>ШОУ МЫЛЬНЫХ</div>
            <span className="showBig_text ">ПУЗЫРЕЙ</span>
          </div>
          <img src={show6} alt="" className="showimg showimg62" />
        </div>
        <div className="showBlock_info infoEsp show7">
          <img src={show71} alt="" className="showimg showimg71" />

          <div>
            ВЫСТПУЛЕНИЕ
            <br />
            ТАНЦЕВАЛЬНЫХ
          </div>
          <span className="showBig_text espG ">ГРУПП</span>
          <img src={show72} alt="" className="showimg showimg72" />
        </div>
        <div className="showBlock_info  show8">
          <img src={show81} alt="" className="showimg showimg81" />
          <div className="infoEsp_block">
            <div>LASER</div> <span className="showBig_text">TAG</span>
          </div>
          <img src={show82} alt="" className="showimg showimg82" />
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
