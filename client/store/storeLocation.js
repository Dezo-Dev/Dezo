import axios from "axios";

const GET_STORES = "GET_STORES";
const CREATE_STORES = "CREATE_STORES";
const DELETE_STORE = "DELETE_STORE";

const getStores = stores => ({ type: GET_STORES, stores });
const createStore = store => ({ type: CREATE_STORES, store });
const deleteStore = id => ({ type: DELETE_STORE, id });

export const getAllStores = () => async dispatch => {
  const { data } = await axios.get("/api/stores");
  dispatch(getStores(data));
};

export const createStoreLocation = payload => async dispatch => {
  const { data } = await axios.post("/api/stores", payload);
  dispatch(createStore(data));
};

export const delStore = id => async dispatch => {
  const { data } = await axios.delete(`/api/stores/${id}`);
  dispatch(deleteStore(id));
};

const stores = (state = [], action) => {
  switch (action.type) {
    case GET_STORES:
      return action.stores;
    case CREATE_STORES:
      return [...state, action.store];
    case DELETE_STORE:
      return [...state].filter(s => s !== action.id);
    default:
      return state;
  }
};

export default stores;
