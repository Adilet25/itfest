import React, { useState, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./RegisterForm.css";
import { Breadcrumbs, InputLabel, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContextProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import not404 from "../../../assets/not404.svg";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [theme2, setTheme2] = useState("");

  const [work, setWork] = useState("");
  const [format, setFormat] = useState("");
  const [checked, setChecked] = useState(false);
  const [inpBtnSt, setInpBtnSt] = useState(false);

  const { role, register, regSt, errorr } = useAuth();

  const [Surname, setSurname] = useState("");
  const [Name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [Email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [speech_theme, setSpeech_theme] = useState("");
  const [message, setMessage] = useState("");
  const [legAdr, setlegAdr] = useState("");
  const [inn, setInn] = useState(0);
  const [jbtitle, setjbtitle] = useState("");
  const [siteurl, setsiteurl] = useState("");
  const [activity, setactivity] = useState("");

  const [compProd, setcompprod] = useState("");

  function sendData(fork) {
    if (fork == "register_user/speaker/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !speech_theme
      ) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
        speech_theme: speech_theme,
      };
      register(formdata, fork);
    }
    if (fork == "register_user/masterclass/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !speech_theme
      ) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
        speech_theme: speech_theme,
      };
      register(formdata, fork);
    }
    if (fork == "register_user/cybersport/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work ||
        !format
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
        Game: work,
        ParticipateFormat: format,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "register_user/design/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
        course: work,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "register_user/hackathon/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
        course: work,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (
      fork == "register_user/mobilography/" ||
      fork == "register_user/dronerace/" ||
      fork == "register_user/robotix/"
    ) {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Surname: Surname,
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Country: Country,
        City: City,
        DateOfBirth: DateOfBirth,
        PhoneNumber: PhoneNumber,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
      }
    }
    if (fork == "register_company/food_zone/") {
      if (
        !Name ||
        !Surname ||
        !legAdr ||
        !inn ||
        !FatherName ||
        !jbtitle ||
        !activity ||
        !siteurl ||
        !Email ||
        !Country ||
        !compProd
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Brand_name: Name,
        Legal_name: Surname,
        Legal_address: legAdr,
        INN: inn,
        Supervisor_Name: FatherName,
        Job_Title: jbtitle,
        Company_Activity: activity,
        Web_Site: siteurl,
        Email: Email,
        Country: Country,
        Phone_number: PhoneNumber,
        Company_Product: compProd,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "register_company/it_expo/") {
      if (
        !Name ||
        !Surname ||
        !legAdr ||
        !inn ||
        !FatherName ||
        !jbtitle ||
        !activity ||
        !siteurl ||
        !Email ||
        !Country ||
        !PhoneNumber ||
        !compProd ||
        !theme2
      ) {
        console.log(Country, PhoneNumber, compProd, reg_logo, reg_check);
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        Brand_name: Name,
        Legal_name: Surname,
        Legal_address: legAdr,
        INN: inn,
        Supervisor_Name: FatherName,
        Job_Title: jbtitle,
        Company_Activity: activity,
        Web_Site: siteurl,
        Email: Email,
        Country: Country,
        Phone_number: PhoneNumber,
        Company_Product: compProd,
        Theme: theme2,
      };
      emailVal();
      if (message.length < 1) {
        console.log(reg_logo);
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
  }
  function formatphone(value) {
    if (!value) return value;
    const phonenum = value.replace(/[^\d]/g, "");
    const phonenumlen = phonenum.length;
    if (phonenumlen < 4) return phonenum;
    if (phonenumlen < 7) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3)}`;
    }
    if (phonenumlen < 9) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
        6
      )}`;
    }
    if (phonenumlen < 12) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
        6,
        9
      )}${phonenum.slice(9)}`;
    }

    return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
      6,
      9
    )}${phonenum.slice(9, 12)}`;
  }
  const phoneHandle = (e) => {
    const formatedphone = formatphone(e.target.value);
    setPhoneNumber(formatedphone);
  };
  const emailVal = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(Email)) {
      setMessage("");
    } else if (!regEx.test(Email) && Email !== "") {
      setMessage("Неправильный электронный адрес");
    } else {
      setMessage("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="regBlockbg">
      <div className="container">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          color="white"
        >
          <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={() => navigate("/")}
          >
            Главная
          </Link>
          ,
          <Link
            underline="hover"
            key="3"
            color="inherit"
            onClick={() => navigate("/choice")}
          >
            Регистрация
          </Link>
        </Breadcrumbs>
        <div className="regForm_block">
          {regSt ? (
            <div className="regFormSucces">
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Регистрация прошла успешно!
              </Alert>
            </div>
          ) : errorr.length > 1 ? (
            <div className="regFormSucces">
              <Alert severity="error">
                Упс, проблема! Попробуйте снова позже или перепроверьте данные!{" "}
              </Alert>
            </div>
          ) : (
            <></>
          )}
          <h2>Регистрация</h2>
          {role == "EXPO" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Наименование бренда</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">
                    Полное юридическое наименование организации
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Юридический адрес</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setlegAdr(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">ИНН</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setInn(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">ФИО руководителя </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Должность</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setjbtitle(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Деятельность компании</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setactivity(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Веб-сайт</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setsiteurl(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form
                    action=""
                    method="post"
                    id="cusCreate"
                    autocomplete="off"
                  >
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">Тематический раздел</p>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        onChange={(event) => setTheme2(event.target.value)}
                        value={theme2}
                        className="formInputSelect"
                      >
                        <MenuItem value={"Услуги"}>Услуги</MenuItem>
                        <MenuItem value={"Товары"}>Товары</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="formBlock label2">
                  <div>
                    <p className="formInp_label">
                      Опишите товары или услуги компании
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setcompprod(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                onClick={() => sendData("register_company/it_expo/")}
              >
                Зарегистрироваться
              </button>
            </>
          ) : role == "Tournament" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Фамилия</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Отчество</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                      required
                    />
                  </form>
                </div>{" "}
                {role == "Tournament" ? (
                  <>
                    <div className="formBlock">
                      <div>
                        <p className="formInp_label">Тематический раздел</p>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            onChange={(event) => setTheme(event.target.value)}
                            value={theme}
                            className="formInputSelect"
                          >
                            <MenuItem value={"cybersport"}>Киберспорт</MenuItem>
                            <MenuItem value={"design"}>Дизайн и 3D</MenuItem>
                            <MenuItem value={"hackathon"}>Хакатон</MenuItem>
                            <MenuItem value={"mobilography"}>
                              Мобилография
                            </MenuItem>
                            <MenuItem value={"robotix"}>Робототехника</MenuItem>
                            <MenuItem value={"dronerace"}>
                              Дрон демонстрация
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>{" "}
                    <div className="formBlock">
                      {theme == "cybersport" ? (
                        <div>
                          <p className="formInp_label">
                            Выберите свое направление
                          </p>
                          <FormControl fullWidth disabled={theme.length < 1}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              onChange={(event) => setWork(event.target.value)}
                              value={work}
                              className="formInputSelect"
                            >
                              <MenuItem value={"Counter-Strike 2"}>
                                Counter-Strike 2
                              </MenuItem>
                              {/* <MenuItem value={"PUBG"}>PUBG</MenuItem>
                              <MenuItem value={"Dota 2"}>Dota 2</MenuItem> */}
                            </Select>
                          </FormControl>
                        </div>
                      ) : theme == "design" ? (
                        <div>
                          <p className="formInp_label">
                            Выберите свое направление
                          </p>
                          <FormControl fullWidth disabled={theme.length < 1}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              onChange={(event) => setWork(event.target.value)}
                              value={work}
                              className="formInputSelect"
                            >
                              <MenuItem value={"3D дизайн"}>3D дизайн</MenuItem>
                              <MenuItem value={"Motionдизайн"}>
                                Motion дизайн
                              </MenuItem>
                              <MenuItem value={"UX/UI"}>UX/UI</MenuItem>
                              <MenuItem value={"Графический дизайнер"}>
                                Графический дизайнер
                              </MenuItem>
                              <MenuItem
                                value={"3D визуализация(интерьер и экстерьер)"}
                              >
                                3D визуализация (интерьер и экстерьер)
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      ) : theme == "hackathon" ? (
                        <div>
                          <p className="formInp_label">
                            Выберите свое направление
                          </p>
                          <FormControl fullWidth disabled={theme.length < 1}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              onChange={(event) => setWork(event.target.value)}
                              value={work}
                              className="formInputSelect"
                            >
                              <MenuItem value={"Backend"}>Backend</MenuItem>
                              <MenuItem value={"Frontend"}>Frontend</MenuItem>
                              <MenuItem value={"Fullstack"}>Fullstack</MenuItem>
                              <MenuItem value={" Android-IOS"}>
                                Android-IOS
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="formBlock">
                      {theme == "cybersport" ? (
                        <div>
                          <p className="formInp_label">Формат участия</p>
                          <FormControl fullWidth disabled={theme.length < 1}>
                            <Select
                              labelId="demo-multiple-name-label"
                              id="demo-multiple-name"
                              onChange={(event) =>
                                setFormat(event.target.value)
                              }
                              value={format}
                              className="formInputSelect"
                            >
                              <MenuItem value={"Одиночное"}>Одиночное</MenuItem>
                              <MenuItem value={"Командное"}>Командное</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <button
                className={`regBbtn regBtn${checked}`}
                onClick={() => sendData(`register_user/${theme}/`)}
                disabled={!checked}
              >
                Зарегистрироваться
              </button>
              {regSt ? (
                <button
                  className={`regBbtn regBtntrue`}
                  onClick={() => navigate("/")}
                  disabled={!checked}
                >
                  На главную
                </button>
              ) : (
                <></>
              )}
            </>
          ) : role == "Speaker" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Фамилия</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Отчество</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form
                    action=""
                    method="post"
                    id="cusCreate"
                    autocomplete="off"
                  >
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Введите на какую тему хотите выступить
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setSpeech_theme(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                onClick={() => sendData("register_user/speaker/")}
              >
                Зарегистрироваться
              </button>
            </>
          ) : role == "Food" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Наименование бренда</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">
                    Полное юридическое наименование организации
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Юридический адрес</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setlegAdr(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">ИНН</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setInn(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">ФИО руководителя </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Должность</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setjbtitle(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Деятельность компании</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setactivity(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Веб-сайт</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setsiteurl(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form
                    action=""
                    method="post"
                    id="cusCreate"
                    autocomplete="off"
                  >
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formBlock label2">
                  <div>
                    <p className="formInp_label">
                      Опишите товары или услуги компании
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setcompprod(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                onClick={() => sendData("register_company/food_zone/")}
              >
                Зарегистрироваться
              </button>
            </>
          ) : role == "Master" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Фамилия</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Отчество</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form
                    action=""
                    method="post"
                    id="cusCreate"
                    autocomplete="off"
                  >
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Впишите вид своей деятельность и какую активность хотите
                      продемонстроировать
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setSpeech_theme(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                onClick={() => sendData("register_user/masterclass/")}
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <div className="notFound_block">
              {" "}
              <img
                loading="lazy"
                src={not404}
                alt=""
                className="notFound_img"
              />
              <h3>
                Страница, которую вы запрашиваете не найдена, не существует либо
                временно не доступна
              </h3>
              <button onClick={() => navigate("/")} className="notFound_btn">
                Перейти на главную
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
