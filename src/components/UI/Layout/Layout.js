import React from "react";
import Navbar from "components/UI/Navbar/Navbar";
import Footer from "components/UI/Footer/Footer";

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-black text-white pt-14">{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};
export default layout;
