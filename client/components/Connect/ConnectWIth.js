import React from "react";
import { ConnHeaders, ConnLinks } from "./ConnHeaders";

export default class ConnectWith extends React.Component {
  render() {
    return (
      <section style={{ marginTop: "15rem", height: "600px", margin: "auto" }}>
        <div className='connect'>
          <h1 style={{ textAlign: "center" }}>Connect With Us</h1>
          <ConnHeaders />
          <ConnLinks />
        </div>
      </section>
    );
  }
}
