import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title}) => {
  return (
    <>
      <Helmet
        defaultTitle="SPEC NITH"
        title={title}
        titleTemplate="%s | SPEC"
      />
    </>
  )
}

export default Head;