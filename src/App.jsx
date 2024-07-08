import React from "react";
import Layout from "./components/Layout/Layout";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="appBlock">
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </div>
  );
};

export default App;
