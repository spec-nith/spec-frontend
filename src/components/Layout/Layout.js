import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

const Layout = (props) => {
  return (
    <div className="bg-gradient overflow-hidden">
      <Navbar />
      <div className="relative overflow-hidden mt-2 my-4 py-8 md:my-12 md:p-12">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
