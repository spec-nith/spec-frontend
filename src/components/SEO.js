import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SEO = () => {
  const { title, description } = useSiteMetadata();

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli&display=swap"></link>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
