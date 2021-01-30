import React from "react";
import "./Header.css";
import { withRouter } from "react-router-dom";

import Aux from "../../../hoc/Auxilary";

const getBgImage = (imgPath) => {
  switch (imgPath) {
    case "/home":
      return "header home";
    case "/about":
      return "header about";
    case "/sports":
      return "header sports";
    case "/culural events":
      return "header cultural";
    case "/meeting-and-confference":
      return "header meeting-and-confference";
    case "/parties-and-weddings":
      return "header parties-and-weddings";
    case "/musical-events":
      return "header musical-event";
    case "/exhibitions":
      return "header exhibitions";
    case "/live":
      return "header live";
    case "/contact":
      return "header contact";
  }
};

const Header = (props) => {
  console.log(props.location.pathname);
  // let page =
  //   props.location.pathname === "/home"
  //     ? "header-home"
  //     : props.location.pathname === "/about"
  //     ? "header-about"
  //     : "null";

  let page = getBgImage(props.location.pathname);
  return (
    <Aux>
      <header className={page}>
        <div className="overlay"></div>
        {props.children}
      </header>
    </Aux>
  );
};

export default withRouter(Header);
