import React from "react";
import ServiceSection from "../Containers/ServiceSection/ServiceSection";

const PartiesAndWeddingPageBody = () => {
  const services = {
    PhotographyService: true,
    VideographyService: true,
    LiveStreamingService: true,
  };
  return (
    <div>
      <ServiceSection services={services} />
    </div>
  );
};

export default PartiesAndWeddingPageBody;
