import React from "react";
import ServiceSection from "../Containers/ServiceSection/ServiceSection";

const SportsPageBody = () => {
  const services = {
    PhotographyService: true,
    VideographyService: true,
    LiveStreamingService: true,
    ScoreUpdateService: true,
    ReplayService: true,
  };
  return (
    <div>
      <ServiceSection services={services} />
    </div>
  );
};

export default SportsPageBody;
