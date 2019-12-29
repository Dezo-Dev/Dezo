import axios from "axios";

const CREATE_PRODUCT = "CREATE_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const createP = product => ({ type: CREATE_PRODUCT, product });
const getP = products => ({ type: GET_PRODUCTS, products });
const delP = id => ({ type: DELETE_PRODUCT, id });

export const getProducts = () => async dispatch => {
  const { data } = await axios.get("/api/products");
  dispatch(getP(data));
};

export const createProduct = payload => async dispatch => {
  const { data } = await axios.post("/api/products", payload);
  dispatch(createP(data));
};

export const deleteProduct = id => async dispatch => {
  await axios.delete(`/api/products/${id}`);
  dispatch(delP(id));
};

const products = (state = [], action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, action.product];
    case GET_PRODUCTS:
      return action.products;
    case DELETE_PRODUCT:
      return [...state].filter(p => p.id !== action.id);
    default:
      return state;
  }
};

export default products;
