import React from "react";
import Layout from "./components/Layout/Layout";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div className="appBlock">
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
};

export default App;
