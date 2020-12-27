import React, { Component } from "react";
import ReactHtmlParser from "html-react-parser";
import FacbookAlbums from "./FacebookAlbums/FacbookAlbums";

class AboutBody extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 mb-2">Some of our works</h1>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          assumenda, esse, numquam omnis nobis praesentium consectetur
          temporibus sed in quos voluptatem error. Possimus, sed dolore veniam
          consequuntur pariatur repellat perspiciatis!
        </p>
        <FacbookAlbums />
      </div>
    );
  }
}

export default AboutBody;
