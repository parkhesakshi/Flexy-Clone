import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Modern from "../../features/restricted/modern/modern.component";
import Analytical from "../../features/restricted/analytical/analitical.component";
import ECommerce from "../../features/restricted/eCommerce/eCommerce.component";
import App from "../../../App";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path={"/modern"} element={<Modern />} />
      <Route path={"/dashboard/analytical"} element={<Analytical />} />
      <Route path={"/dashboard/eCommerce"} element={<ECommerce />} />
    </Routes>
  );
};

export default RoutesConfig;
