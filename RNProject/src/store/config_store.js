import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/order_reducer";
import nameReducer from "./reducers/name_reducer";
import formReducer from "./reducers/form_reducer";

const rootReducer = combineReducers({
  order: orderReducer,
  name: nameReducer,
  form: formReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
