import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import products from "./products";
import user from "./users";
import stores from "./storeLocation";

const reducer = combineReducers({ products, user, stores });
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export * from "./products";
export * from "./users";
export * from "./storeLocation";
