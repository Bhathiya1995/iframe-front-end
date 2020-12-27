import React from "react";
import { Card } from "react-bootstrap";

import "./DetailCard.css";

const DetailCard = (props) => {
  return (
    <div>
      <Card className="bg-dark text-white detail-card ">
        <Card.Img
          className="card-image overlay-card "
          src={props.image}
          alt="Card image"
        />

        <Card.ImgOverlay>
          <Card.Title className="text-center card-title ">
            {props.title}
          </Card.Title>
          <Card.Text className="card-text">{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default DetailCard;
