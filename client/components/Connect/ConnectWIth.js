import React from "react";
import { ConnHeaders, ConnLinks } from "./ConnHeaders";

const connect = [
  {
    name: "Tomas Crowe",
    category: "Media Inquiries & PR",
    phone: "(818) 903-7153",
    email: "tomas@vitalizeholdings.com"
  },
  {
    name: "Tim Demirjian",
    category: "Investment Opportunities",
    phone: "(617) 459-5121",
    email: "tim@vitalizeholdings.com"
  }
];

export default class ConnectWith extends React.Component {
  state = {
    connect: []
  };
  componentDidMount() {
    this.setState({ connect });
  }
  render() {
    return (
      <div
        className="new"
        style={{
          backgroundColor: "white",
          width: "100%"
        }}
      >


        <div className="connect-container">
        <h2 id="connect-h2">Based in Los Angeles, California</h2>

          {this.state.connect.map((c, idx) => {
            return (

              <div className="connect-container" key={idx}>
                <div><h1 id="connect-category">{c.category}</h1></div>
                <div><h3 id="connect-name">{c.name}</h3></div>
                <div><h3 id="connect-phone">{c.phone}</h3></div>
                <div><h3 id="connect-email">{c.email}</h3></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
