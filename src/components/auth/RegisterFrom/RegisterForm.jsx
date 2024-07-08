import React from "react";
import downloadicon from "../../../assets/downloadicon.svg";
import Checkbox from "@mui/material/Checkbox";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="regForm_block">
      <h2>Регистрация</h2>
      <div className="formBlock">
        <p className="formInp_label">Имя</p>
        <input className="formInput" type="text" />
      </div>
      <div className="formBlock">
        <p className="formInp_label">Фамилия</p>
        <input className="formInput" type="text" />
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">Отчество</p>
        <input className="formInput" type="text" />
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">Email</p>
        <input className="formInput" type="text" />
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">Страна</p>
        <input className="formInput" type="text" />
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">Город</p>
        <input className="formInput" type="text" />
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">Дата рождения</p>
        <input className="formInput" type="date" />
      </div>
      <div className="secondForm_block">
        <p>Загрузите паспорт с лицевой стороны</p>
        <div>
          <label for="inpfile" class="seconForm_btn">
            Загрузить
            <img src={downloadicon} alt="" />
          </label>
          <input type="file" placeholder="Загрузить" id="inpfile" />
        </div>
        <p>Загрузите паспорт с обратной стороны</p>
        <div>
          <label for="inpfile" class="seconForm_btn">
            Загрузить
            <img src={downloadicon} alt="" />
          </label>
          <input type="file" placeholder="Загрузить" id="inpfile" />
        </div>
        <p>Сделайте селфи с паспортом*</p>
        <div>
          <label for="inpfile" class="seconForm_btn">
            Загрузить
            <img src={downloadicon} alt="" />
          </label>
          <input type="file" placeholder="Загрузить" id="inpfile" />
        </div>
      </div>
      <div className="formBlock">
        <p className="formInp_label">Телефон</p>
        <form action="" method="post" id="cusCreate" autocomplete="off">
          <input
            type="tel"
            name="telphone"
            placeholder="996 999777666"
            pattern="[0-9]{3} [0-9]{3}[0-9]{3}[0-9]{3}"
            maxlength="13"
            title="Пример:996 999777666"
            className="formInput"
            required
          />
        </form>
      </div>{" "}
      <div className="formBlock">
        <p className="formInp_label">WhatsApp</p>
        <form action="" method="post" id="cusCreate" autocomplete="off">
          <input
            type="tel"
            name="telphone"
            placeholder="996 999777666"
            pattern="[0-9]{3} [0-9]{3}[0-9]{3}[0-9]{3}"
            maxlength="13"
            title="Пример:996 999777666"
            className="formInput"
            required
          />
        </form>
        <div className="fourForm_block">
          <div className="fourForm1">
            <h3>Я заинтересован в</h3>
            <div className="fourForm1_checks">
              <Checkbox />
              <p>Посещение на HIT EXPO</p>
            </div>
            <div className="fourForm1_checks">
              <Checkbox />
              <p>Участие на HIT EXPO</p>
            </div>
            <div className="fourForm1_checks">
              <Checkbox />
              <p>Поиске проектов</p>
            </div>
            <div className="fourForm1_checks">
              <Checkbox />
              <p>Другое</p>
            </div>
          </div>
          <div className="fourForm2">
            <h3>Как вы узнали о мероприятие?</h3>
            <div className="fourForm2_checks">
              <Checkbox />
              <p>Инстаграм</p>
            </div>{" "}
            <div className="fourForm2_checks">
              <Checkbox />
              <p>ТВ, Радио</p>
            </div>{" "}
            <div className="fourForm2_checks">
              <Checkbox />
              <p>Новостные порталы</p>
            </div>{" "}
            <div className="fourForm2_checks">
              <Checkbox />
              <p>Другое</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
