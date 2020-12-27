import React from "react";
import Aux from "../hoc/Auxilary";
import "./Layout.css";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

import { Redirect, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout/HomeLayout";
import AboutPageLayout from "./AboutPageLayout/AboutPageLayout";
import SportsPageLayout from "./SportsPageLayout/SportsPageLayout";
import CulturalEventPageLayout from "./CulturalEventPageLayout/CulturalEventPageLayout";
import MeetingAndConferencePageLayout from "./MeetingAndConferencePageLayout/MeetingAndConferencePageLayout";
import PartiesAndWeddingPageLayout from "./PartiesAndWeddingPageLayout/PartiesAndWeddingPageLayout";
import MusicalEventPageLayout from "./MusicalEventPageLayout/MusicalEventPageLayout";
import ExhibitionPageLayout from "./ExhibitionPageLayout/ExhibitionPageLayout";
import LivePageLayout from "./LivePageLayout/LivePageLayout";

const Layout = (props) => {
  console.log(props.location);
  return (
    <Aux>
      <NavigationBar className="navigationbar" />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={HomeLayout} />
      <Route path="/about" exact component={AboutPageLayout} />
      <Route path="/sports" exact component={SportsPageLayout} />
      <Route path="/culural-events" exact component={CulturalEventPageLayout} />
      <Route
        path="/meeting-and-confference"
        exact
        component={MeetingAndConferencePageLayout}
      />
      <Route
        path="/parties-and-weddings"
        exact
        component={PartiesAndWeddingPageLayout}
      />
      <Route path="/musical-events" exact component={MusicalEventPageLayout} />
      <Route path="/exhibitions" exact component={ExhibitionPageLayout} />
      <Route path="/live" exact component={LivePageLayout} />
      <div>Footer</div>
    </Aux>
  );
};

export default Layout;
