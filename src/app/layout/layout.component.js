import React, { useEffect } from "react";
import Sidenav from "./sidenav/sidenav.component";
import PageLayout from "./base-layout/base-layout.component";
import "./layout.component.scss";
import { setDataInLocalstorage } from "../shared/functions/localstorage.funtions";
import { USER_ID_KEY } from "../shared/constants/utilities";

const Layout = () => {
  useEffect(() => {
    setDataInLocalstorage(USER_ID_KEY, 2);
  }, []);

  return (
    <div className="bg-grey layout min-vh-100">
      <Sidenav />
      <PageLayout></PageLayout>
    </div>
  );
};

export default Layout;
