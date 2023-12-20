import React from "react";
import Layout from "./app/layout/layout.component";
import "./App.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      Component: RoutesConfig,
    },
  ]);

  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default App;
