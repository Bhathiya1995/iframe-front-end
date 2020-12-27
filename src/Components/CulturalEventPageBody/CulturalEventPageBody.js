import React from "react";
import ServiceSection from "../Containers/ServiceSection/ServiceSection";

const CulturalEventPageBody = () => {
  const services = {
    PhotographyService: true,
    VideographyService: true,
    LiveStreamingService: true,
    LedWallService: true,
  };
  return (
    <div>
      <ServiceSection services={services} />
    </div>
  );
};

export default CulturalEventPageBody;
