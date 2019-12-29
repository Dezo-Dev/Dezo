import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./Products/Products";
import About from "./About/About";
import Press from "./Press/Press";
import ConnectWith from "./Connect/ConnectWIth";
import WhereToBuy from "./Buy/WhereToBuy";
import WhereToBuyCreate from "./Buy/WhereToBuyCreate";
import CreateProduct from "./Products/CreateProduct";
import { Login, Signup } from "./Users/CreateAdmin";

class Routes extends Component {
  state = {
    isLoggedIn: true
  };
  render() {
    const { isLoggedIn } = this.state;

    return (
      <Switch>
        <Redirect exact from="/" to="/about" />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ConnectWith} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/buy" component={WhereToBuy} />
        <Route exact path="/dezo/admin/signup" component={Signup} />
        <Route exact path="/dezo/admin/login" component={Login} />
        {isLoggedIn && (
          <Switch>
            <Route exact path="/products/create" component={CreateProduct} />
            <Route
              exact
              path="/storeLocate/create"
              component={WhereToBuyCreate}
            />
          </Switch>
        )}
      </Switch>
    );
  }
}

export default Routes;
