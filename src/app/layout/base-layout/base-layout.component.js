import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Headernav from "../headernav/headernav.component";
import RoutesConfig from "../routes/routes.component";

const pageLayout = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "*",
      Component: RoutesConfig,
    },
  ]);
  return (
    <div className="p-3">
      <Headernav />
      <RouterProvider router={router} />
    </div>
  );
};

export default pageLayout;
