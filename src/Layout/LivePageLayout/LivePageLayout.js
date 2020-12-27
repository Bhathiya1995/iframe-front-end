import React from "react";
import Header from "../../Components/Containers/Header/Header";
import Aux from "../../hoc/Auxilary";
import PartiesAndWeddingPageBody from "../../Components/PartiesAndWeddingPageBody/PartiesAndWeddingPageBody";
import { Component } from "react";

class LivePageLayout extends Component {
  state = {
    url: null,
  };

  noUrl = (
    <h1 className="text-white text-center about-text-header mx-5 my-5">
      No Live Stream available right now !!
    </h1>
  );

  liveComponent = (
    <iframe
      width="1080"
      height="560"
      src={this.state.url}
      frameborder="0"
      allowfullscreen
    ></iframe>
  );

  render() {
    return (
      <Aux>
        <Header>
          <div className="container text-area mx-auto px-auto">
            {this.state.url == null ? this.noUrl : this.liveComponent}
          </div>
        </Header>
      </Aux>
    );
  }
}

export default LivePageLayout;
