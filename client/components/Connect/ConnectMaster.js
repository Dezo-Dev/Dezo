import React from "react";
import ConnectWith from "./ConnectWith";
import { ConnectHeader } from "./ConnectHeader";

class ConnectMaster extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        id="connect"
        style={{
          backgroundImage: "url(../../assets/images/wave-02.jpg)",
          width: "100% !important"
        }}
      >
      <ConnectHeader />
        <div className="press-master">
          <ConnectWith />
        </div>

      </div>
    );
  }
}

export default ConnectMaster;
