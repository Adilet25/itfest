import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import arrow from "../../../assets/arrow.svg";

import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import menuicon from "../../../assets/menu.svg";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [arrowSt, setArrowSt] = useState(false);
  const [arrowSt1, setArrowSt1] = useState(false);
  const [arrowSt2, setArrowSt2] = useState(false);
  const [arrowSt3, setArrowSt3] = useState(false);
  const [arrowDrop1, setDrop1] = useState(false);
  const [arrowDrop2, setDrop2] = useState(false);
  const [arrowDrop3, setDrop3] = useState(false);
  const [arrowDrop4, setDrop4] = useState(false);

  const [open2, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg2">
      <div className="container">
        <div className="navBlock_main">
          <img
            src={logo}
            alt="error"
            className="navBlock_logo"
            onClick={() => navigate("/")}
          />
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt(!arrowSt)}
            >
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
              onClick={() => setArrowSt1(!arrowSt1)}
            >
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
              onClick={() => setArrowSt2(!arrowSt2)}
            >
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
              onClick={() => setArrowSt3(!arrowSt3)}
            >
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
          <p className="navBlock_nav" onClick={() => navigate("/choice")}>
            Регистрация
          </p>
          <div className="navDrawer">
            <Button onClick={toggleDrawer(true)}>
              <img src={menuicon} alt="error" style={{ width: "2.6rem" }} />
            </Button>
            <Drawer anchor={"right"} open={open2} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop1(!arrowDrop1)}
                  >
                    <div className="navDropdown">О мероприятии</div>
                    <img
                      src={arrow}
                      alt="error"
                      className={`${arrowDrop1}Drop navDrop_ar`}
                    />
                  </div>
                  {arrowDrop1 ? (
                    <div className="navDropdown_list">
                      <ListItemButton>
                        <p>Организаторы</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Локация</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Программы</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Воркшопы и спикеры</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>EXPO</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Мастер классы</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Концертная программа</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>After Party</p>
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <p>Спонсоры и партнёры</p>
                      </ListItemButton>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop2(!arrowDrop2)}
                  >
                    <div className="navDropdown">Участникам</div>
                    <img
                      src={arrow}
                      alt="error"
                      className={`${arrowDrop2}Drop navDrop_ar`}
                    />
                  </div>
                  {arrowDrop2 ? (
                    <div className="navDropdown_list">
                      <ListItemButton>
                        <p>Преимущества участия</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Разделы фестиваля</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Билет</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Отборочный тур и финал</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Проживание и трансфер</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Модераторы турниров</p>
                      </ListItemButton>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop3(!arrowDrop3)}
                  >
                    <div className="navDropdown">Посетителям</div>
                    <img
                      src={arrow}
                      alt="error"
                      className={`${arrowDrop3}Drop navDrop_ar`}
                    />
                  </div>
                  {arrowDrop3 ? (
                    <div className="navDropdown_list">
                      <ListItemButton>
                        <p>Что вас ожидает?</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Проживание от партнёров</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Билет</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Как добраться?</p>
                      </ListItemButton>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop4(!arrowDrop4)}
                  >
                    <div className="navDropdown">Спонсорам и партнёрам</div>
                    <img
                      src={arrow}
                      alt="error"
                      className={`${arrowDrop4}Drop navDrop_ar`}
                    />
                  </div>
                  {arrowDrop4 ? (
                    <div className="navDropdown_list">
                      <ListItemButton>
                        <p>Ваши возможности</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Преимущества</p>
                      </ListItemButton>
                      <Divider />

                      <ListItemButton>
                        <p>Рекламные возможности</p>
                      </ListItemButton>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <ListItemButton>
                    <div
                      className="navDrop_reg"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </div>
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
