import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Aux from "../../../hoc/Auxilary";
import FacebookAlbum from "./FacebookAlbum/FacebookAlbum";
import "./FacebookAlbums.css";

class FacbookAlbums extends Component {
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    return (
      <Aux>
        <Row className="mx-auto row mx-4">
          <Col md="4" className="col">
            <FacebookAlbum url="https://www.facebook.com/iframelk/photos/a.2236579753306563/2236579856639886/" />
          </Col>
          <Col md="4" className="col">
            <FacebookAlbum url="https://www.facebook.com/iframelk/photos/a.2233375586960313/2233376320293573/" />
          </Col>
          <Col md="4" className="col">
            <FacebookAlbum url="https://www.facebook.com/iframelk/photos/a.2233242160306989/2233245036973368/" />
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default FacbookAlbums;
