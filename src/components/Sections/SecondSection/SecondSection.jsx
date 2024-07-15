import React from "react";
import "./SecondSection.css";
import ReactPlayer from "react-player/lazy";
import el4 from "../../../assets/elements/el4.svg";

const SecondSection = () => {
  return (
    <div className="container">
      <p className="secondBlock_title">О мероприятии</p>
      <div className="secondBlock_video">
        <div>
          <ReactPlayer
            url="https://youtu.be/gHgD57ytup0?si=x63n42fUpjTr84xa"
            className="secondViedo"
          />
        </div>
        <div>
          IT FEST 2024 "CYBER КӨЛ" — это крупнейшее технологическое событие в
          Кыргызстане, посвященное инновациям в сфере информационных технологий.
          <p>
            Организуемое в формате фестиваля, IT FEST собирает ведущих
            специалистов, стартапы, инвесторов, студентов и энтузиастов
            технологий для обмена опытом, демонстрации последних технологических
            достижений и создания новых партнерских связей.
          </p>
        </div>
        <img src={el4} alt="" className="secondBlock_el" />
      </div>
      <div className="secondInfo">
        <div>
          <p className="fs2"> 2</p>
          <p>дня</p>
        </div>
        <div>
          <p className="fs2"> 7000</p>
          <p>посетителей</p>
        </div>
        <div>
          <p className="fs2"> 12+</p>
          <p>направлений</p>
        </div>
        <div>
          <p className="fs2"> 3000</p>
          <p>участников</p>
        </div>
        <div>
          <p className="fs2"> 10</p>
          <p>тематических зон</p>
        </div>
        <div>
          <p className="fs2"> 30+</p>
          <p>спикеров</p>
        </div>
        <div>
          <p className="fs2"> 5</p>
          <p>стран</p>
        </div>
        <div className="numend">
          <p className="fs2 "> 5 000 000</p>
          <p>медиа охватов</p>
        </div>
        <div>
          <p className="fs2"> 1500</p>
          <p>кв. м экспозиций</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
