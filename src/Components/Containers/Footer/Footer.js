import React from "react";
import Aux from "../../../hoc/Auxilary";
import "./Footer.css";

import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Aux>
      <footer className="footer-distributed">
        {/* footer left */}
        <div className="footer-left">
          <img src={logo} alt="logo image" />
          <p className="text-description ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tenetur quisquam, assumenda dolore quia odit, magnam magni provident
            autem velit quam reprehenderit? Earum itaque nisi, aut laudantium
            animi iste suscipit?
          </p>
          <p className="footer-company-name">Iframe &copy; 2020</p>
        </div>

        {/* footer center */}
        <div className="footer-center">
          <div>
            <FontAwesomeIcon className="footer-icon" icon={faPhone} />
            <p>+94 71 772 0006</p>
          </div>
          <div>
            <FontAwesomeIcon className="footer-icon" icon={faMapMarker} />
            <p>1/8C, Wekunugoda Lane, Galle</p>
          </div>
          <div>
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            <p>iframe@gmail.com</p>
          </div>

          <div className="footer-icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <i className="fab fa-instagram footer-icon"></i>
              <p>facebook</p>
            </a>
          </div>
        </div>

        {/* Footer right */}
        <div className="footer-right mt-3">
          <p className="text-white ml-2 font-weight-bold">Services</p>
          <ul className="footer-list">
            <li className="footer-links">
              <a href="/sports">Sports</a>
            </li>
            <li className="footer-links">
              <a href="/cultural-event">Cultural Events</a>
            </li>
            <li className="footer-links">
              <a href="/meeting-and-conference">Meeting and Conference</a>
            </li>
            <li className="footer-links">
              <a href="/parties-and-weddings">Parties and Weddings</a>
            </li>
            <li className="footer-links">
              <a href="/musical-events">Musical Events</a>
            </li>
            <li className="footer-links">
              <a href="/exhibitions">Exhibitions</a>
            </li>
          </ul>
        </div>
      </footer>
    </Aux>
  );
};

export default Footer;
