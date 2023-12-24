import Footer from "../footer/footer.component";
import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div
      className="bg-transparent overflow-auto p-3"
      style={{ height: "87vh" }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
