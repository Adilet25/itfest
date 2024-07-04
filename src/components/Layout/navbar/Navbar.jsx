import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import arrow from "../../../assets/arrow.svg";

import "./Navbar.css";

const Navbar = () => {
  const [arrowSt, setArrowSt] = useState(false);
  const [arrowSt1, setArrowSt1] = useState(false);
  const [arrowSt2, setArrowSt2] = useState(false);
  const [arrowSt3, setArrowSt3] = useState(false);

  return (
    <div className="bg2">
      <div className="container">
        <div className="navBlock_main">
          <img src={logo} alt="error" className="navBlock_logo" />
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt(!arrowSt)}>
              <p className="navBlock_nav">О мероприятии</p>
              <img
                src={arrow}
                alt="error"
                className={`${arrowSt}Ar navArrow`}
              />
            </div>
            {arrowSt ? (
              <div className="navDrop">
                <p>Организаторы</p>
                <p>Локация</p>
                <p>Программы</p>
                <p>Воркшопы и спикеры</p>
                <p>EXPO</p>
                <p>Мастер классы</p>
                <p>Концертная программа</p>
                <p>After Party</p>
                <p>Спонсоры и партнёры</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt1(!arrowSt1)}>
              <p className="navBlock_nav">Участникам</p>
              <img
                src={arrow}
                alt="error"
                className={`${arrowSt1}Ar navArrow`}
              />
            </div>
            {arrowSt1 ? (
              <div className="navDrop">
                <p>Преимущества участия</p>
                <p>Разделы фестиваля</p>
                <p>Билет</p>
                <p>Отборочный тур и финал</p>
                <p>Проживание и трансфер</p>
                <p>Модераторы турниров</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt2(!arrowSt2)}>
              <p className="navBlock_nav">Посетителям</p>
              <img
                src={arrow}
                alt="error"
                className={`${arrowSt2}Ar navArrow`}
              />
            </div>
            {arrowSt2 ? (
              <div className="navDrop">
                <p>Что вас ожидает?</p>
                <p>Проживание от партнёров</p>
                <p>Билет</p>
                <p>Как добраться?</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt3(!arrowSt3)}>
              <p className="navBlock_nav">Спонсорам и партнёрам</p>
              <img
                src={arrow}
                alt="error"
                className={`${arrowSt3}Ar navArrow`}
              />
            </div>
            {arrowSt3 ? (
              <div className="navDrop">
                <p>Ваши возможности</p>
                <p>Преимущества</p>
                <p>Рекламные возможности</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p className="navBlock_nav">Регистрация</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
