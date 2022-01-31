import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

const Layout = (props) => {
  return (
    <div className="bg-gradient overflow-hidden">
        <Navbar />
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8 text-white">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
