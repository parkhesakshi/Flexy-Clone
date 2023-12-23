import React from "react";
import { Outlet } from "react-router-dom";
import Headernav from "../headernav/headernav.component";
import PageLayout from "../page-layout/page-layout.component";

const pageLayout = ({ children }) => {
  return (
    <div className="base-layout p-3 bg-grey">
      <Headernav />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </div>
  );
};

export default pageLayout;
