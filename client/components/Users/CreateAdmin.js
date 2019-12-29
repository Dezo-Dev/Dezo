import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store, { auth } from "../../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
class AuthForm extends React.Component {
  constructor() {
    super();
    this.state = {
      pwCheck: false,
      error: ""
    };
  }

  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (
      this.state.password !== this.state.passwordCheck &&
      this.props.name === "signup"
    ) {
      this.setState({ error: "passwords don't match" });
    } else {
      await this.setState({
        email: this.state.email.toLowerCase()
      });
      try {
        await store.dispatch(auth(this.state, this.props.name));
        if (!this.props.user.id) {
          this.setState({ error: "No user" });
        } else {
          this.props.history.push("/about");
        }
      } catch (er) {
        console.log(er);
      }
    }
  };

  render() {
    const { name, displayName, error } = this.props;

    return (
      <div
        style={{
          paddingTop: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "200px",
          height: "auto",
          backgroundColor: "lightgrey",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <form name={name} className="home-body form" autoComplete="off">
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" onChange={this.handleChange} />
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input
              onFocus={() => this.setState({ error: "" })}
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            {/* {name === "login" && <Link to="/reset">Forgot Password?</Link>} */}
            {name === "signup" && (
              <div>
                <label htmlFor="passwordChecker">
                  <small>Re-Type Password</small>
                </label>
                <input
                  onFocus={() => this.setState({ error: "" })}
                  name="passwordCheck"
                  type="password"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="fName">
                  <small>First Name</small>
                </label>
                <input
                  name="fName"
                  type="text"
                  placeholder="first name"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="lName">
                  <small>Last Name</small>
                </label>
                <input
                  name="lName"
                  type="text"
                  placeholder="last name"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="Secret Code">
                  <small>Code</small>
                </label>
                <input
                  name="code"
                  type="text"
                  placeholder="code"
                  onChange={this.handleChange}
                />
              </div>
            )}
            {this.state.error !== null && <div>{this.state.error}</div>}
            {error && error.response && <div> {error.response.data} </div>}
            <div
              onClick={this.handleSubmit}
              className="choice types"
              style={{ marginTop: 0, color: "#B8B8B3" }}
              disabled={this.state.pwCheck}
            >
              {displayName}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    user: state.user
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    user: state.user
  };
};

export const Login = connect(mapLogin)(AuthForm);
export const Signup = connect(mapSignup)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object
};
