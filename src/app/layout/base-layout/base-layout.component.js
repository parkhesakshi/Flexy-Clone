import React from "react";
import { Outlet } from "react-router-dom";
import Headernav from "../headernav/headernav.component";

const pageLayout = ({ children }) => {
  return (
    <div className="p-3">
      <Headernav />
      <Outlet />
    </div>
  );
};

export default pageLayout;
