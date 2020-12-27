import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Auxilary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);
  const childRef = React.createRef();
  useEffect(() => {
    const node = childRef.current;
  });

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      className="navlinks font-weight-bold mx-3"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children} &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(({ children, style, className }, ref) => {
    const [value, setValue] = useState("");
    return (
      <div
        ref={ref}
        className={className}
        style={{
          backgroundColor: navbar ? "white" : "transparent",
          border: "none",
        }}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  });

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <Aux>
      {/* <header className="header"> */}
      <Navbar
        className={
          navbar
            ? "navbar navbar-expand-sm fixed-top navbar-light navbar-bg active"
            : "navbar navbar-expand-sm fixed-top navbar-light navbar-bg"
        }
        collapseOnSelect
        expand="lg"
      >
        {/* <Navbar className="nav-color" collapseOnSelect expand="lg"> */}
        <div className="brand">
          <Navbar.Brand className="ml-5">
            <img className="" src={logo} alt="iframe logo" />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle ref={childRef} aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/home" className="navlinks font-weight-bold mx-3">
              Home
            </NavLink>
            <NavLink to="/about" className="navlinks font-weight-bold mx-3">
              About
            </NavLink>
            <NavLink to="/live" className="navlinks font-weight-bold mx-3">
              Live
            </NavLink>

            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="service-dropdown">
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu
                as={CustomMenu}
                className="dropdown-bg"
                align="left"
              >
                <Dropdown.Item href="sports">Sports</Dropdown.Item>
                <Dropdown.Item href="/culural-events">
                  Cultural Events
                </Dropdown.Item>
                <Dropdown.Item href="/meeting-and-confference">
                  Meeting & Confference
                </Dropdown.Item>
                <Dropdown.Item href="/parties-and-weddings">
                  Parties & Weddings
                </Dropdown.Item>
                <Dropdown.Item href="/musical-events">
                  Musical Events
                </Dropdown.Item>
                <Dropdown.Item href="/exhibitions">Exhibitions</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink to="/contact" className="navlinks font-weight-bold mx-3">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </header> */}
    </Aux>
  );
};

export default NavigationBar;
