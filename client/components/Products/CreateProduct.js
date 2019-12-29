import React from "react";
import { connect } from "react-redux";
import { createProduct } from "../../store";

class CreateProduct extends React.Component {
  state = {
    name: "",
    description: "",
    link: ""
    // imgURL: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProduct(this.state);
  };
  render() {
    return (
      <form
        ref={this.props.myRef}
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25rem",
          height: "auto",
          margin: "auto",
          paddingTop: "20rem"
        }}
      >
        <label>Name: </label>
        <input name="name" placeholder="name" onChange={this.handleChange} />
        <label>Description: </label>
        <input
          name="description"
          placeholder="description"
          onChange={this.handleChange}
          type="textarea"
        />
        <label>Image URL: </label>
        <input name="imgURL" placeholder="img" onChange={this.handleChange} />
        <label>Link To Buy: </label>
        <input
          name="link"
          placeholder="link to buy"
          onChange={this.handleChange}
        />
        <button type="submit">Create Product</button>
      </form>
    );
  }
}

const mD = {
  createProduct: createProduct
};

export default connect(null, mD)(CreateProduct);
