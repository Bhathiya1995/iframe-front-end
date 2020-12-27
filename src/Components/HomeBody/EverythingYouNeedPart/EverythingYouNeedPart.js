import React from "react";
import { Col, Row } from "react-bootstrap";
import "./EverythingYouNeedPart.css";

import DetailCard from "../DetailCard/DetailCard";

// import images
import watchYoutbe from "../../../assets/watchYoutbe.jpg";
import replayImage from "../../../assets/replayimage.jpg";
import photographyImage from "../../../assets/photographyImage.jpg";
import scoreImage from "../../../assets/scoreImage.jpg";

const EverythingYouNeedPart = () => {
  const someText =
    // Red error occour
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad illo natus officia quis? Recusandae aut obcaecati ut sequi velit at doloremque autem quasi reprehenderit cum aperiam unde, dolor officia!";
  return (
    <div>
      <h1 className=" mx-5 sub-title-1 mt-5">
        Everything you need to livestream
      </h1>

      <p className="mx-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
        tempora sequi optio, veritatis saepe nihil ratione officiis hic,
        reiciendis adipisci fuga architecto id commodi! Pariatur quia quidem
        commodi facilis laudantium.
      </p>

      <Row className="mx-auto mt-4 container">
        <Col xs="12" md="3">
          <DetailCard image={watchYoutbe} title="Watch Live" text={someText} />
        </Col>
        <Col xs="12" md="3">
          <DetailCard image={replayImage} title="Replay" text={someText} />
        </Col>
        <Col xs="12" md="3">
          <DetailCard
            image={photographyImage}
            title="Photography"
            text={someText}
          />
        </Col>
        <Col xs="12" md="3">
          <DetailCard image={scoreImage} title="Score Update" text={someText} />
        </Col>
      </Row>
      <hr className="container" />
    </div>
  );
};

export default EverythingYouNeedPart;
