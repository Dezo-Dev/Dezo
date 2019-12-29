import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="logo"></span>
        <NavLink
          to="/about"
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#00e6b8",
            fontWeight: "bolder"
          }}
        >
          About Dezo
        </NavLink>
        <NavLink
          to="/products"
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#00e6b8",
            fontWeight: "bolder"
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/press"
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#00e6b8",
            fontWeight: "bolder"
          }}
        >
          Press
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#00e6b8",
            fontWeight: "bolder"
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to="/buy"
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#00e6b8",
            fontWeight: "bolder"
          }}
        >
          Find Dezo
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
