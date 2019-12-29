import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-subcontainer">
          <img
            src="../../assets/images/"
            alt="logo"
            style={{ border: "1px solid black", width: "10vw", height: "10vw" }}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              About Dezo
            </Link>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Products
            </Link>
            <Link
              to="/press"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Press
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Contact
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
