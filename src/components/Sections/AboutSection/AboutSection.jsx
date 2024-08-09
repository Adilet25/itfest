import React from "react";
import "./AboutSection.css";
import el5 from "../../../assets/elements/el5.svg";
import el6 from "../../../assets/elements/el6.svg";
import el7 from "../../../assets/elements/el7.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const AboutSection = () => {
  return (
    <div className="bg7">
      <div className="expoAbout">
        <div className="expoAbout_div exp1">
          <h2>МИССИЯ</h2>
          <p>
            <span className="expTextBold">
              Поддержке технологической эволюции:
            </span>
            <br />
            Способствование ускоренному внедрению новейших технологий, таких как
            искусственный интеллект ,блокчейн , интернет вещей и кибер
            безопасность, для улучшения жизнии экономического роста в
            Кыргызстане.
          </p>
          <p>
            <span className="expTextBold">
              Создание образовательных возможностей:
            </span>
            <br />
            Обеспечение доступа к образовательным программам, которые помогают
            развивать профессиональные навыки и подготавливают специалистов к
            вызовам цифровой экономики.
          </p>
          <p>
            <span className="expTextBold">
              Продвижение инновационного мышления:
            </span>
            <br />
            Поощрение инновационного мышления среди молодежи ипрофессионалов,
            вдохновление на создание новых решений и технологий, способных
            изменить мир к лучшему.
          </p>{" "}
          <img loading="lazy" src={el5} alt="" className="aboutImg aboutImg1" />
        </div>{" "}
        <div className="expoAbout_div exp2">
          <h2>ЦЕЛИ</h2>
          <p>
            ITFEST 2024 стремится стать центром инноваций и диалога,
            способствующим развитию технологического потенциала Кыргызстана. Мы
            стремимся укрепить экосистему информационных технологий, поддержать
            молодые IT-стартапы,обеспечить обучение и профессиональное развитие
            для будущих лидеров отрасли.
          </p>
          <img loading="lazy" src={el6} alt="" className="aboutImg aboutImg2" />
        </div>{" "}
        <div className="expoAbout_div exp3">
          <h2>ЗАДАЧИ</h2>
          <ul>
            <li>
              Организация высококачественного мероприятия с участием ведущих
              специалистов IT индустрии.
            </li>
            <li>
              Поддержка и стимулирование инновационных проектов и стартапов.
            </li>
            <li>
              Проведение турниров и конкурсов по различным направлениям IT.
            </li>

            <li>Привлечение международных экспертов и инвесторов.</li>
            <li>
              Организация образовательных и профессиональных панелей и
              дискуссий.
            </li>
            <li>
              Обеспечение высокого уровня безопасности и комфорта для участников
              и гостей.
            </li>
            <li>
              Популяризация технологий и инноваций, способствующих развитию
              Кыргызстана и других стран СНГ.
            </li>
          </ul>
          <img loading="lazy" src={el7} alt="" className="aboutImg aboutImg1" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
