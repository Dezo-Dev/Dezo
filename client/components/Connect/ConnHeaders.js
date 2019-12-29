import React from "react";
import { Link } from "react-router-dom";

export const ConnHeaders = () => {
  return (
    <div className="conn-headers">
      <div>Want to Write an article?</div>
      <div>Hosting an event?</div>
      <div> Want to bring dezo to your venue?</div>
    </div>
  );
};

export const ConnLinks = () => {
  return (
    <div className="conn-links">
      <Link to="/contact" style={{ textDecoration: "none" }}>
        Connect With Our PR Team
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        Get Dezo For My Event
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        You've Come to the Right Place
      </Link>
    </div>
  );
};
