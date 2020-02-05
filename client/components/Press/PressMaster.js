import React from "react";
import Press from "./Press";
import { PressHeader } from "./PressHeader";

class PressMaster extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        id="header"
        style={{
          backgroundImage: "url(../../assets/images/wave-02.jpg)",
          width: "100% !important"
        }}
      >
      <PressHeader />
        <div className="press-master">
          <Press />
        </div>

      </div>
    );
  }
}

export default PressMaster;
