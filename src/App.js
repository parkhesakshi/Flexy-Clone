import React from "react";
import Layout from "./app/layout/layout.component";
import "./App.scss";
import RoutesConfig from "./app/layout/routes/routes.component";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Modern from "./app/features/restricted/modern/modern.component";
import Analytical from "./app/features/restricted/analytical/analitical.component";
import ECommerce from "./app/features/restricted/eCommerce/eCommerce.component";

const App = () => {
  // const router = createBrowserRouter([
  //   { path: "/", element: <Layout /> },
  //   {
  //     path: "*",
  //     Component: RoutesConfig,
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path={"/dashboard/modern"} element={<Modern />} />
        <Route path={"/dashboard/analytical"} element={<Analytical />} />
        <Route path={"/dashboard/eCommerce"} element={<ECommerce />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
