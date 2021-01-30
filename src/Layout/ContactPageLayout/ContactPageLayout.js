import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../Components/Containers/Header/Header";
import Aux from "../../hoc/Auxilary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactPageLayout = () => {
  return (
    <Aux>
      <Header>
        <div className="container text-area ">
          <Row>
            <h1>Contact Us</h1>
          </Row>
          <Row>
            <div>
              <FontAwesomeIcon className="footer-icon" icon={faPhone} />
              +94 71 772 0006
            </div>
          </Row>
          <Row>
            <div>
              <FontAwesomeIcon className="footer-icon" icon={faMapMarker} />
              1/8C, Wekunugoda Lane, Galle
            </div>
          </Row>
          <Row>
            <div>
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
              iframe@gmail.com
            </div>
          </Row>
        </div>
      </Header>
    </Aux>
  );
};

export default ContactPageLayout;
