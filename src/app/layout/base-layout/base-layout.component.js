import React from "react";
import Headernav from "../headernav/headernav.component";

const pageLayout = ({ children }) => {
  return (
    <div className="p-3">
      <Headernav />
      {children}
    </div>
  );
};

export default pageLayout;
