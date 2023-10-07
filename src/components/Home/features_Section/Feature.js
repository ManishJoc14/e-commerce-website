import React from "react";
import { v4 as uuidv4 } from 'uuid'

const Feature = ({features}) => {
  if (!features || !Array.isArray(features) || features.length === 0) {
    return <div>No features available</div>;
  }
  return (
    <>
      {features && features.map((feature, index) => (
        <div className="fe-box" key={uuidv4()}>
          <img src={feature.imageSrc} alt="feature" />
          <h6>{feature.title}</h6>
        </div>
      ))}
    </>
  );
};

export default Feature;
