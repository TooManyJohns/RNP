import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/order_reducer";

const rootReducer = combineReducers({
  order: orderReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
