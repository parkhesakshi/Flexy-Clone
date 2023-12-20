import React from "react";
import Sidenav from "./sidenav/sidenav.component";
import Main from "./main/main.component";
import PageLayout from "./base-layout/base-layout.component";
import "./layout.component.scss";

const layout = () => {
  return (
    <div className="bg-grey layout vh-100">
      <Sidenav />
      <PageLayout></PageLayout>
    </div>
  );
};

export default layout;
