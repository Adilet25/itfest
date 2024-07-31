import React, { Suspense } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { CircularProgress } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Suspense
        fallback={
          <div className="loadingblock">
            <CircularProgress />
          </div>
        }
      >
        {children}
      </Suspense>
      <Footer/>
    </div>
  );
};

export default Layout;
