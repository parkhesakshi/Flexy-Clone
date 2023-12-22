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
import Calender from "./app/features/restricted/calender/calender.component";
import Alert from "./app/features/restricted/alert/alert.component";
import Chats from "./app/features/restricted/chats-menu/chat.component";
import Customer from "./app/features/restricted/customer/custoer.component";
import Mail from "./app/features/restricted/mail-component/mail.component";
import Notes from "./app/features/restricted/notes/notes.component";
import Shops from "./app/features/restricted/shops/shop.component";
import UserProfile from "./app/features/restricted/user-profile/user-profile.component";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path={"/dashboard/modern"} element={<Modern />} />
        <Route path={"/dashboard/analytical"} element={<Analytical />} />
        <Route path={"/dashboard/eCommerce"} element={<ECommerce />} />
        <Route path={"/app/chats"} element={<Chats />} />
        <Route path={"/app/notes"} element={<Notes />} />
        <Route path={"/app/mail"} element={<Mail />} />
        <Route path={"/app/calender"} element={<Calender />} />
        <Route path={"/app/customer"} element={<Customer />} />
        <Route path={"/pages/shop"} element={<Shops />} />
        <Route path={"/pages/alert"} element={<Alert />} />
        <Route path={"/pages/userProfile"} element={<UserProfile />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
