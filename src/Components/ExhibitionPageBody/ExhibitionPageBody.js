import React from "react";
import ServiceSection from "../Containers/ServiceSection/ServiceSection";

const ExhibitionPageBody = () => {
  const services = {
    PhotographyService: true,
    VideographyService: true,
    LiveStreamingService: true,
    LiveSessionsService: true,
    EquipmentService: true,
  };
  return (
    <div>
      <ServiceSection services={services} />
    </div>
  );
};

export default ExhibitionPageBody;
