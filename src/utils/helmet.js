import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet defaultTitle="SPEC NITH" title={title} titleTemplate="%s | SPEC">
      {/* Cache Control */}
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="Cache-control" content="public" />
      <meta http-equiv="Expires" content="3600" />

      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Official Website of SPEC NITH" />
      <meta
        name="keywords"
        content="Electrothon, Electrothon 4.0, SPEC, NITH, Hackathon, Electrothon 2022"
      />
      <meta name="author" content="Team SPEC" />

      {/* OG Tags */}
      <meta id="og-title" property="og:title" content={title} />
      <meta
        id="og-description"
        property="og:description"
        content="Official Website of SPEC NITH"
      />
      <meta id="og-image" property="og:image" content="favicon.png" />
      <meta id="og-site_name" property="og:site_name" content="SPEC NITH" />
      <meta id="og-type" property="og:type" content="website" />
      <meta id="og-url" property="og:url" content="https://specnith.com" />

      {/* Apple Mobile Config */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="SPEC NITH" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Logo Config */}
      <link rel="icon" href="favicon.png" />
      <link rel="apple-touch-icon" href="favicon.png" />
    </Helmet>
  );
};

export default Head;
