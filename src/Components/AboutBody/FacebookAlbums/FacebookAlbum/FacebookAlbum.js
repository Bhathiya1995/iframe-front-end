import React from "react";

const FacebookAlbum = (props) => {;
  return (
    <div
      className="fb-post"
      data-href={props.url}
      data-width="750"
    ></div>
  );
};

export default FacebookAlbum;
