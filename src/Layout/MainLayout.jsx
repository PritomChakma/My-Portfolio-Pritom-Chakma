import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Navbar from "../Share/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
