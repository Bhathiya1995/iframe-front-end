import React from "react";
import Header from "../../Components/Containers/Header/Header";
import HomeBody from "../../Components/HomeBody/HomeBody";
import Aux from "../../hoc/Auxilary";
import { Button } from "react-bootstrap";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <Aux>
      <Header>
        <div className="container text-area">
          <h1 className="text-white text-header"> Live streaming solutions</h1>
          <h1 className="text-white text-header"> you can count on.</h1>
          <p>
            We make it easy to livestream engaging virtual events, reach your
            remote workforce,
            <br /> and launch a subscription channel.
          </p>
          <Button variant="outline-light" size="lg">
            Get Start
          </Button>
        </div>
      </Header>
      <HomeBody />
    </Aux>
  );
};

export default HomeLayout;
