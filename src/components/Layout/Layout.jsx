import React, { Suspense } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
