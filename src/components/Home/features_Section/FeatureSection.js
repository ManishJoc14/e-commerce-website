import React from "react";
import Feature from "./Feature";

const FeatureSection = ({features}) => {
    return (
    <>
      <section id="feature" className="section-p1">
          <Feature features={features}/>
      </section>
    </>
  );
};

export default FeatureSection;
