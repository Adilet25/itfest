import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import RegisterForm from "./components/auth/RegisterFrom/RegisterForm";
import NotFoundPage from "./pages/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/choice",
      element: <RegisterPage />,
      id: 2,
    },
    {
      link: "/reg",
      element: <RegisterForm />,
      id: 3,
    },
    // {
    //   link: "/*",
    //   element: <NotFoundPage />,
    //   id: 4,
    // },
    // {
    //   link: "/reg",
    //   element: <RegisterPage />,
    //   id: 2,
    // },
    // {
    //   link: "/reg",
    //   element: <RegisterPage />,
    //   id: 2,
    // },
    // {
    //   link: "/reg",
    //   element: <RegisterPage />,
    //   id: 2,
    // },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
