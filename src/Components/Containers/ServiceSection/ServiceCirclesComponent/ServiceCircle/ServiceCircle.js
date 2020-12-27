import React from "react";
import Aux from "../../../../../hoc/Auxilary";

const ServiceCircle = (props) => {
  return (
    <Aux>
      <li className={props.class == "right" ? "timeline-inverted" : ""}>
        <div className="timeline-image">
          <img
            src={props.image}
            alt="serviceImage"
            className="img-circle img-responsive"
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{props.header}</h4>
            <h4 className="subheading">{props.subtitle}</h4>
          </div>
          <div className="timeline-body">
            <p className="text-muted">{props.description}</p>
          </div>
        </div>
        {props.node != "final" ? <div className="line"></div> : null}
      </li>
    </Aux>
  );
};

export default ServiceCircle;
