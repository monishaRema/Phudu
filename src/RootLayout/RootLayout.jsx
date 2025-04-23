import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
