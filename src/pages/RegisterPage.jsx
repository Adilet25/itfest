import React from "react";
import RegisterForm from "../components/auth/RegisterFrom/RegisterForm";
import ChooseForm from "../components/auth/ChooseForm/ChooseForm";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="regBg">
      <div className="container">
        <ChooseForm />
      </div>
    </div>
  );
};

export default RegisterPage;
