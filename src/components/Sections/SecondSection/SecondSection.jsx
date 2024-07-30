import React from "react";
import "./SecondSection.css";
import ReactPlayer from "react-player/lazy";
import el4 from "../../../assets/elements/el4.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".secondBlock_title",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondViedo",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondVideo_text",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <div className="container">
      <p className="secondBlock_title">О мероприятии</p>
      <div className="secondBlock_video">
        <div>
          <ReactPlayer
            url="https://youtu.be/73UCO3atSpc?si=OaK7fiW67_D1D6co"
            className="secondViedo"
          />
        </div>
        <div className="secondVideo_text">
          IT FEST 2024 "CYBER KYRGYZSTAN" — это крупнейшее технологическое событие в
          Кыргызстане, посвященное инновациям в сфере информационных технологий.
          <p>
            Организуемое в формате фестиваля, IT FEST собирает ведущих
            специалистов, стартапы, инвесторов, студентов и энтузиастов
            технологий для обмена опытом, демонстрации последних технологических
            достижений и создания новых партнерских связей.
            Место проведения:Гольф клуб «Кленовый Лист»
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
