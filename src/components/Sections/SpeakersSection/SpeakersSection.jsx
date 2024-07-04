import React from "react";
import showimg from "../../../assets/headliners.png";
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
