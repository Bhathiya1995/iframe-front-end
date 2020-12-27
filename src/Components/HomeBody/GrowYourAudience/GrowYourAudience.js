import React from "react";
import "./GrowYourAudience.css";
import { Row, Col } from "react-bootstrap";

// import images
import youtubeLogo from "../../../assets/youtubeLogo.png";
import facebookLogo from "../../../assets/facebookLogo.png";
import linkedinLogo from "../../../assets/linkedinLogo.png";
import instagramLogo from "../../../assets/instagramLogo.png";

const GrowYourAudience = () => {
  return (
    // <div className="image-part text-center">
    //   <div className="bg-overlay">
    //     <div className="growAudienceBG "></div>
    //   </div>
    //   {/* </div> */}

    //   <h1 className="text-image ">Grow Your Audience </h1>
    // </div>
    <div>
      <h1 className=" text-center sub-title-1 mt-5">Grow Your Audience </h1>

      <p className="mx-5 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
        tempora sequi optio, veritatis saepe nihil ratione officiis hic,
        reiciendis adipisci fuga architecto id commodi! Pariatur quia quidem
        commodi facilis laudantium.
      </p>
      <Row className="container mx-auto mt-5">
        <Col className="px-4 mb-2" md="3" xs="6">
          <img className="platform-logo" src={youtubeLogo} alt="youtube " />
        </Col>
        <Col className="px-4 mb-2" md="3" xs="6">
          <img className="platform-logo" src={facebookLogo} alt="facebook " />
        </Col>
        <Col className="px-4 mb-2" md="3" xs="6">
          <img className="platform-logo" src={linkedinLogo} alt="linkedin " />
        </Col>
        <Col className="px-4 mb-2" md="3" xs="6">
          <img className="platform-logo" src={instagramLogo} alt="instagram " />
        </Col>
      </Row>
    </div>
  );
};

export default GrowYourAudience;
