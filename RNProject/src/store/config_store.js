import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/order_reducer";
import nameReducer from "./reducers/name_reducer";

const rootReducer = combineReducers({
  order: orderReducer,
  name: nameReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
