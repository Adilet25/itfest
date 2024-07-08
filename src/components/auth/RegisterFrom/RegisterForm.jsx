import React, { useState } from "react";
import downloadicon from "../../../assets/downloadicon.svg";
import Checkbox from "@mui/material/Checkbox";
import "./RegisterForm.css";
import { Breadcrumbs, InputLabel, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContextProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [theme2, setTheme2] = useState("");

  const [work, setWork] = useState("");
  const [format, setFormat] = useState("");
  const [checked, setChecked] = useState(false);

  const { role } = useAuth();
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
          <h2>Регистрация</h2>
          {role == "EXPO" ? (
            <div className="regForm_info">
              <div className="formBlock">
                <p className="formInp_label">Наименование бренда</p>
                <input className="formInput" type="text" />
              </div>

              <div className="formBlock">
                <p className="formInp_label">
                  Полное юридическое наименование организации
                </p>
                <input className="formInput" type="text" />
              </div>

              <div className="formBlock">
                <p className="formInp_label">Юридический адрес</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">ИНН</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">ФИО руководителя </p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Должность</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Деятельность компании</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Веб-сайт</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Email</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Страна</p>
                <input className="formInput" type="text" />
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
                    Опишите товары или услуги уомпании
                  </p>
                  <textarea className="formTextarea"></textarea>
                </div>
              </div>
              <div className="formBlockFile">
                <p className="formInp_label">Логотип компании</p>
                <input
                  type="file"
                  placeholder="Загрузить"
                  className="formInput2"
                  id="inpfile2"
                />
                <label for="inpfile2" class="formInp_labels">
                  Загрузите файл
                </label>
              </div>
              <div className="formBlockFile">
                <p className="formInp_label">Свидетельство регистрации</p>
                <input
                  type="file"
                  placeholder="Загрузить"
                  className="formInput2"
                  id="inpfile2"
                />
                <label for="inpfile2" class="formInp_labels">
                  Загрузите файл
                </label>
              </div>
            </div>
          ) : role == "Tournament" ? (
            <>
              <div className="regForm_info">
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
                      pattern="[0-9]{3} [0-9]{3}[0-9]{3}[0-9]{3}"
                      maxlength="13"
                      title="Пример:996 999777666"
                      className="formInput"
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
                            <MenuItem value={"Киберспорт"}>Киберспорт</MenuItem>
                            <MenuItem value={"Дизайн и 3D"}>
                              Дизайн и 3D
                            </MenuItem>
                            <MenuItem value={"Хакатон"}>Хакатон</MenuItem>
                            <MenuItem value={"Мобилография"}>
                              Мобилография
                            </MenuItem>
                            <MenuItem value={"Робототехника"}>
                              Робототехника
                            </MenuItem>
                            <MenuItem value={"Дрон демонстрация"}>
                              Дрон демонстрация
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>{" "}
                    <div className="formBlock">
                      {theme == "Киберспорт" ? (
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
                              <MenuItem value={"PUBG"}>PUBG</MenuItem>
                              <MenuItem value={"Dota 2"}>Dota 2</MenuItem>
                              <MenuItem value={"Play Station"}>
                                Play Station
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      ) : theme == "Дизайн и 3D" ? (
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
                      ) : theme == "Хакатон" ? (
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
                                {" "}
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
                      {theme == "Киберспорт" ||
                      theme == "Дизайн и 3D" ||
                      theme == "Хакатон" ? (
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
            </>
          ) : role == "Speaker" ? (
            <>
              <div className="regForm_info">
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
                      pattern="[0-9]{3} [0-9]{3}[0-9]{3}[0-9]{3}"
                      maxlength="13"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Введите на какую тему хотите выступить
                    </p>
                    <textarea className="formTextarea"></textarea>
                  </div>
                </div>
              </div>
            </>
          ) : role == "Food" ? (
            <div className="regForm_info">
              <div className="formBlock">
                <p className="formInp_label">Наименование бренда</p>
                <input className="formInput" type="text" />
              </div>

              <div className="formBlock">
                <p className="formInp_label">
                  Полное юридическое наименование организации
                </p>
                <input className="formInput" type="text" />
              </div>

              <div className="formBlock">
                <p className="formInp_label">Юридический адрес</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">ИНН</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">ФИО руководителя </p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Должность</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Деятельность компании</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Веб-сайт</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Email</p>
                <input className="formInput" type="text" />
              </div>
              <div className="formBlock">
                <p className="formInp_label">Страна</p>
                <input className="formInput" type="text" />
              </div>

              <div className="formBlock label2">
                <div>
                  <p className="formInp_label">
                    Опишите товары или услуги уомпании
                  </p>
                  <textarea className="formTextarea"></textarea>
                </div>
              </div>
              <div className="formBlockFile">
                <p className="formInp_label">Логотип компании</p>
                <input
                  type="file"
                  placeholder="Загрузить"
                  className="formInput2"
                  id="inpfile2"
                />
                <label for="inpfile2" class="formInp_labels">
                  Загрузите файл
                </label>
              </div>
              <div className="formBlockFile">
                <p className="formInp_label">Свидетельство регистрации</p>
                <input
                  type="file"
                  placeholder="Загрузить"
                  className="formInput2"
                  id="inpfile2"
                />
                <label for="inpfile2" class="formInp_labels">
                  Загрузите файл
                </label>
              </div>
            </div>
          ) : role == "Master" ? (
            <>
              <div className="regForm_info">
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
                      pattern="[0-9]{3} [0-9]{3}[0-9]{3}[0-9]{3}"
                      maxlength="13"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Впишите вид своей деятельность и какую активность хотите
                      продемонстроировать
                    </p>
                    <textarea className="formTextarea"></textarea>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="regCheck">
            <Checkbox onChange={(event) => setChecked(event.target.checked)} />
            <p>Я прочел все условия и согласен с ними</p>
          </div>
          <button className={`regBbtn regBtn${checked}`}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
