import React, { useEffect, useState } from "react";
import "./ChooseForm.css";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useAuth } from "../../../context/AuthContextProvider";

const ChooseForm = () => {
  const [stRole, setStrole] = useState(false);
  const { setRole } = useAuth();
  const navigate = useNavigate();
  return (
    <>
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
          //   href="/reg"
          //   onClick={() => navigate("/reg")}
        >
          Регистрация
        </Link>
      </Breadcrumbs>
      <div>
        <div className="chooseRole_block">
          <h2>Регистрация</h2>
          <h3>Выберите свою роль участия:</h3>
          <div className="chooseRole_choice">
            <div
              className="choice3"
              onClick={() => {
                setRole("Tournament");
                navigate("/reg");
              }}
            >
              <h3>Участник турнира</h3>
            </div>
            <div
              className="choice4"
              onClick={() => {
                setRole("EXPO");
                navigate("/reg");
              }}
            >
              <h3>Участник IT EXPO</h3>
            </div>
            <div
              className="choice5"
              onClick={() => {
                setRole("Speaker");
                navigate("/reg");
              }}
            >
              <h3>Спикер</h3>
            </div>
            <div
              className="choice1"
              onClick={() => {
                setRole("Food");
                navigate("/reg");
              }}
            >
              <h3>Участник Food зоны</h3>
            </div>
            <div
              className="choice2"
              onClick={() => {
                setRole("Master");
                navigate("/reg");
              }}
            >
              <h3>Участник мастер-классов</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseForm;
