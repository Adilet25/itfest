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
import menuicon from "../../../assets/menu.svg";

import "./Navbar.css";

const Navbar = () => {
  const [arrowSt, setArrowSt] = useState(false);
  const [arrowSt1, setArrowSt1] = useState(false);
  const [arrowSt2, setArrowSt2] = useState(false);
  const [arrowSt3, setArrowSt3] = useState(false);
  const [open2, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
          <div className="navDrawer">
            <Button onClick={toggleDrawer(true)}>
              <img src={menuicon} alt="error" style={{ width: "2.6rem" }} />
            </Button>
            <Drawer anchor={"right"} open={open2} onClose={toggleDrawer(false)}>
              {/* <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  <ListItemButton>
                    <img src={logo} alt="error" className="navDropDown_logo" />
                  </ListItemButton>
                </List>
              </Box> */}
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  О мероприятии
                  <div className="navDropdown_list">
                    <ListItemButton>
                      <p>Организаторы</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Локация</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Программы</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Воркшопы и спикеры</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>EXPO</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Мастер классы</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Концертная программа</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>After Party</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Спонсоры и партнёры</p>
                    </ListItemButton>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  Участникам
                  <div className="navDropdown_list">
                    <ListItemButton>
                      <p>Преимущества участия</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Разделы фестиваля</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Билет</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Отборочный тур и финал</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Проживание и трансфер</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Модераторы турниров</p>
                    </ListItemButton>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  Посетителям
                  <div className="navDropdown_list">
                    <ListItemButton>
                      <p>Что вас ожидает?</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Проживание от партнёров</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Билет</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Как добраться?</p>
                    </ListItemButton>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  Спонсорам и партнёрам
                  <div className="navDropdown_list">
                    <ListItemButton>
                      <p>Ваши возможности</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Преимущества</p>
                    </ListItemButton>
                    <ListItemButton>
                      <p>Рекламные возможности</p>
                    </ListItemButton>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}>
                <List>
                  <ListItemButton>Регистрация</ListItemButton>
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
