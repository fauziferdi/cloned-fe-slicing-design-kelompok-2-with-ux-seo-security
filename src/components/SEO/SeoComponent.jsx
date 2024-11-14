import React from "react";
import { Helmet } from "react-helmet";

const SeoComponent = ({ title, description, keywords, schema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SeoComponent;
