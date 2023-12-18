import React from "react";
import Sidenav from "./sidenav/sidenav.component";
import Headernav from "./headernav/headernav.component";
import Main from "./main/main.component";
import "./layout.component.scss";

const layout = () => {
  return (
    <div className="bg-grey min-vh-100">
      <Headernav />
      <Sidenav />
      <Main />
    </div>
  );
};

export default layout;
