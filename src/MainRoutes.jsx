import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
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
