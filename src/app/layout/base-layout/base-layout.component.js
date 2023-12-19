import React from "react";
import Headernav from "../headernav/headernav.component";

const pageLayout = ({ children }) => {
  return (
    <div>
      <Headernav />
      {children}
    </div>
  );
};

export default pageLayout;
