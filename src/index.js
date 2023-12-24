import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Modern from "./app/features/restricted/modern/modern.component";
import Analytical from "./app/features/restricted/analytical/analytical.component";
import ECommerce from "./app/features/restricted/eCommerce/eCommerce.component";
import RoutesConfig from "./app/layout/routes/routes.component";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/dashboard/modern",
//     element: <Modern />,
//   },
//   {
//     path: "/dashboard/analytical",
//     element: <Analytical />,
//   },
//   {
//     path: "/dashboard/eCommerce",
//     element: <ECommerce />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "*",
    Component: RoutesConfig,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
