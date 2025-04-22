import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { Slide, ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default RootLayout;
