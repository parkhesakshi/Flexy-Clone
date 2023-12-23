import Footer from "../footer/footer.component";
import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className="bg-transparent">
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
