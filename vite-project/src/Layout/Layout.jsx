import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Routing from "../routes/Routing";


const Layout = () => {
  return (
    <>
      <Header/>
    <Routing/>
      <Footer/>
    </>
  );
};

export default Layout;
