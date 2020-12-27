import React from "react";
import { Container, Row } from "react-bootstrap";
import "./WorkDonePart.css";

import WorkImage from "../../../assets/work.png";

const WorkDonePart = () => {
  return (
    <Container className="mt-5">
      <Row>
        <h1 className="mx-auto sub-title-1">Put your live video to work</h1>
      </Row>
      <Row>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cum
          earum nostrum harum repellendus qui, libero velit, repudiandae totam,
          suscipit adipisci numquam ut iure! Quibusdam tenetur autem eligendi
          eaque id?
        </p>
      </Row>
      <Row>
        <img className="w-75 mx-auto" src={WorkImage} alt="work" />
      </Row>
      <hr></hr>
    </Container>
  );
};

export default WorkDonePart;
