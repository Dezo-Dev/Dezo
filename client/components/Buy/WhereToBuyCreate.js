import React from "react";
import { connect } from "react-redux";
import { createStoreLocation } from "../../store";

class WhereToBuyCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.createStoreLocation(this.state);
  };
  render() {
    console.log("hey");
    return (
      <section style={{ paddingTop: "20rem" }}>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            name="name"
            placeholder="store name"
            onChange={this.handleChange}
          />
          <label>Address Line 1: </label>
          <input
            name="address1"
            placeholder="address line 1"
            onChange={this.handleChange}
          />
          <label>Address Line 2: </label>
          <input
            name="address2"
            placeholder="address line 2"
            onChange={this.handleChange}
          />
          <label>City: </label>
          <input name="city" placeholder="city" onChange={this.handleChange} />
          <label>State: </label>
          <input
            name="state"
            placeholder="state"
            onChange={this.handleChange}
            maxLength="2"
          />
          <label>Zip: </label>
          <input
            name="zip"
            placeholder="zip"
            onChange={this.handleChange}
            maxLength="5"
          />
          <button type="submit">Create Location</button>
        </form>
      </section>
    );
  }
}

const mD = {
  createStoreLocation: createStoreLocation
};

export default connect(null, mD)(WhereToBuyCreate);
