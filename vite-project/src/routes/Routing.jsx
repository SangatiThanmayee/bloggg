import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import SingleBlog from "../components/singleblog/Singleblog";
import ContactUs from "../components/contactus/ContactUs.jsx";
import CreateBlog from "../components/createblog/Createblog.jsx";
import EditUserInfo from "../components/EditUserInfo/EditUserInfo.jsx";
import Register from "../components/register/Register.jsx";
import Signin from "../components/signin/Signin.jsx";
import AboutUs from "../components/AboutUS/AboutUs.jsx";




const Routing = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/createNewBlog" element={<CreateBlog />} />
        <Route path="/user/:id" element={<EditUserInfo/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element ={<AboutUs/>}/>
      </Routes>


    </>
  );
};

export default Routing;
