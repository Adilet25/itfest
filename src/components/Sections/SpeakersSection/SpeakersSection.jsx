import React from "react";
import showimg from "../../../assets/headliners.png";
import speak1 from "../../../assets/speakers/IMG_4339.jpg";
import speak2 from "../../../assets/speakers/IMG_4335.jpg";
import speak3 from "../../../assets/speakers/IMG_4337.jpg";
import speak4 from "../../../assets/speakers/IMG_4336.jpg";
import speak5 from "../../../assets/speakers/IMG_4338.jpg";
import "./SpeakersSection.css";

const SpeakersSection = () => {
  return (
    <div className="bg9">
      <div className="container">
        <div className="speakBlock_main">
          <h2 className="speakBlock_title">СПИКЕРЫ</h2>
          <div className="speakList">
            <div className="speakBlock_card">
              <img src={speak1} alt="" className="speakBlock_circle" />
              <h3>Искенов Даурен</h3>
              <p>
                Рарзаробтчик онлайн игр со стажем более 10лет.Главный
                разработчик компании Ubisoft.
              </p>
            </div>
            <div className="speakBlock_card">
              <img src={speak2} alt="" className="speakBlock_circle" />
              <h3>Айжан Алишерова</h3>
              <p>
                Дуймаз, акселерационный менеджер команды Accelerate Prosperity
              </p>
            </div>
            <div className="speakBlock_card">
              <img src={speak3} alt="" className="speakBlock_circle" />
              <h3>Динара Руслан</h3>
              <p>основатель Codify</p>
            </div>

            <div className="speakBlock_card">
              <img src={speak4} alt="" className="speakBlock_circle" />
              <h3>Жылдыз Исабекова</h3>
              <p>Страновой директор Accelerate Prosperity</p>
            </div>
            <div className="speakBlock_card">
              <img src={speak5} alt="" className="speakBlock_circle" />
              <h3>Эдиль Ажибаев</h3>
              <p>Успешный питчинг, основатель PicVPic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="showBlock_main">
        <h2 className="showBlock_title">ШОУ-ПРОГРАММА</h2>
        <h3 className="showBlock_title2">Хэдлайнеры</h3>
        <img src={showimg} alt="error" className="showBlock_img" />
        <div className="showBlock_info">
          КОСПЛЕЙ <br /> ДЕФИЛЕ
        </div>
        <div className="showBlock_info">
          ИНСТАЛЛЯЦИИ
          <br />И АРТ ОБЬЕКТЫ
        </div>
        <div className="showBlock_info">
          КИНОТЕАТР ПОД
          <br />
          ОТКРЫТЫМ НЕБОМ
        </div>
        <div className="showBlock_info">ФОТОБУДКА</div>
        <div className="showBlock_info">АНИМАТОРЫ</div>
        <div className="showBlock_info infoEsp_block">
          <div>ШОУ МЫЛЬНЫХ</div>
          <span className="showBig_text">ПУЗЫРЕЙ</span>
        </div>
        <div className="showBlock_info infoEsp">
          <div>
            ВЫСТПУЛЕНИЕ
            <br />
            ТАНЦЕВАЛЬНЫХ
          </div>
          <span className="showBig_text espG">ГРУПП</span>
        </div>
        <div className="showBlock_info infoEsp_block">
          <div>LASER</div> <span className="showBig_text">TAG</span>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
