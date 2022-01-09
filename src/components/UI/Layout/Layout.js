import React from "react";
import Navbar from "components/UI/Navbar/Navbar";
import Footer from "components/UI/Footer/Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar curLocation={props.curLocation} />
      <div className=" text-white pt-14">{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
