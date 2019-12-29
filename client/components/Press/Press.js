import React from "react";

const press = [
  { name: "Tom", phone: "123-456-7890" },
  { name: "Alex", phone: "123-456-7890" },
  { name: "Marc", phone: "123-456-7890" },
  { name: "Matt", phone: "123-456-7890" },
  { name: "Eliot", phone: "123-456-7890" },
  { name: "Jonathan", phone: "123-456-7890" }
];

export default class Press extends React.Component {
  state = {
    press: []
  };
  componentDidMount() {
    this.setState({ press });
  }
  render() {
    return (
      <div style={{ paddingTop: "15rem" }}>
        <h1 style={{ textAlign: "center" }}>Press</h1>
        <div className="press-container">
          {this.state.press.map((p, idx) => {
            return (
              <div key={idx}>
                {p.name}
                <br />
                {p.phone}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
