import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <>
      <Helmet defaultTitle="SPEC NITH" title={title} titleTemplate="%s | SPEC">
        <link rel="icon" href="/favicon.png" />
      </Helmet>
    </>
  );
};

export default Head;
