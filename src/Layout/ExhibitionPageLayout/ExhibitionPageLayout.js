import React from "react";
import Header from "../../Components/Containers/Header/Header";
import Aux from "../../hoc/Auxilary";
import ExhibitionPageBody from "../../Components/ExhibitionPageBody/ExhibitionPageBody";

const ExhibitionPageLayout = () => {
  return (
    <Aux>
      <Header>
        <div className="container text-area mx-auto">
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
      <ExhibitionPageBody />
    </Aux>
  );
};

export default ExhibitionPageLayout;
