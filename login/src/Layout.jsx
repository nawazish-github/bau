import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
