import React from "react";
import { Route, Routes } from "react-router-dom";
import Modern from "../../features/restricted/modern/modern.component";
import Analytical from "../../features/restricted/analytical/analitical.component";
import ECommerce from "../../features/restricted/eCommerce/eCommerce.component";

const RoutesConfig = () => {
  return (
    <>
      <Route path={"/dashboard/modern"} element={<Modern />} />
      <Route path={"/dashboard/analytical"} element={<Analytical />} />
      <Route path={"/dashboard/eCommerce"} element={<ECommerce />} />
    </>
  );
};

export default RoutesConfig;
