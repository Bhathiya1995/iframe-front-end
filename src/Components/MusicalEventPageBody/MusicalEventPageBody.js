import React from "react";
import ServiceSection from "../Containers/ServiceSection/ServiceSection";

const MusicalEventPageBody = () => {
  const services = {
    PhotographyService: true,
    VideographyService: true,
    LiveStreamingService: true,
    EquipmentService: true,
  };
  return (
    <div>
      <ServiceSection services={services} />
    </div>
  );
};

export default MusicalEventPageBody;
