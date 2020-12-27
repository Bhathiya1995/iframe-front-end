import React from "react";

import Aux from "../../hoc/Auxilary";

import "./HomeBody.css";

// import component
import WorkDonePart from "./WorkDonePart/WorkDonePart";
import EverythingYouNeedPart from "./EverythingYouNeedPart/EverythingYouNeedPart";
import GrowYourAudience from "./GrowYourAudience/GrowYourAudience";

const HomeBody = () => {
  return (
    <Aux>
      <WorkDonePart />
      <EverythingYouNeedPart />
      <GrowYourAudience />
    </Aux>
  );
};

export default HomeBody;
