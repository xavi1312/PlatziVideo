import React, { Children } from "react";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
