import React from "react";
import AboutBody from "../../Components/AboutBody/AboutBody";
import Header from "../../Components/Containers/Header/Header";
import "./AboutPageLayout.css";

const AboutPageLayout = () => {
  return (
    <div>
      <Header>
        <div className="container text-area">
          <h1 className="text-white text-center about-text-header">
            {" "}
            Live streaming solutions
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi quisquam quos iste architecto neque rerum asperiores
            accusantium nihil eos. Optio, aliquam beatae id culpa eius sed quas
            animi nobis.
          </p>
        </div>
      </Header>
      <AboutBody />
    </div>
  );
};

export default AboutPageLayout;
