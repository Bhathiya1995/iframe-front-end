import React from "react";
import { Col, Row } from "react-bootstrap";

// import CSS
import "./ServiceSection.css";

// import service section
import {
  PhotographyService,
  VideographyService,
  LiveStreamingService,
  ScoreUpdateService,
  ReplayService,
  LedWallService,
  SoundSystemService,
  LiveSessionsService,
  EquipmentService,
} from "./ServiceCirclesComponent/ServiceCircleComponents";

const ServiceSection = (props) => {
  var requestService = [];
  let leftside = true; // true => left, false => right
  let side = null;
  let finalNode;

  Object.keys(props.services).forEach((service) => {
    if (props.services[service]) {
      requestService.push(service);
    }
  });

  var lastSerivce = requestService[requestService.length - 1];

  const serviceSwitch = (service) => {
    side = leftside ? "left" : "right";
    finalNode = lastSerivce == service ? "final" : null;
    leftside = !leftside;

    switch (service) {
      case "PhotographyService":
        return <PhotographyService class={side} final={finalNode} />;
      case "VideographyService":
        return <VideographyService class={side} final={finalNode} />;
      case "LiveStreamingService":
        return <LiveStreamingService class={side} final={finalNode} />;
      case "ScoreUpdateService":
        return <ScoreUpdateService class={side} final={finalNode} />;
      case "ReplayService":
        return <ReplayService class={side} final={finalNode} />;
      case "LedWallService":
        return <LedWallService class={side} final={finalNode} />;
      case "SoundSystemService":
        return <SoundSystemService class={side} final={finalNode} />;
      case "LiveSessionsService":
        return <LiveSessionsService class={side} final={finalNode} />;
      case "EquipmentService":
        return <EquipmentService class={side} final={finalNode} />;
    }
  };

  console.log(requestService);

  return (
    <div className="container">
      <Row>
        <Col>
          <h3 className="text-center mt-5">Our Services</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus eligendi sapiente ullam necessitatibus enim quibusdam
            commodi tempora voluptatum voluptatem magnam molestiae esse, quidem
            quos, deleniti quisquam eius saepe ad eos?
          </p>
        </Col>
      </Row>
      <ul className="timeline">
        {requestService.map((service) => {
          return serviceSwitch(service);
        })}
      </ul>
    </div>
  );
};

export default ServiceSection;
