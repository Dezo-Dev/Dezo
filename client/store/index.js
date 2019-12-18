import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import products from "./products";

const reducer = combineReducers({ products });
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export * from "./products";
