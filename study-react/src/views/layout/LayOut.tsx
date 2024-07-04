import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
export const LayOut: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
