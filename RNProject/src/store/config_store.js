import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/order_reducer";
import nameReducer from "./reducers/name_reducer";
import formReducer from "./reducers/form_reducer";
import typeReducer from "./reducers/type_reducer";
import areaReducer from "./reducers/area_reducer";
import pokemonlistReducer from "./reducers/pokemonlist_reducer";

const rootReducer = combineReducers({
  order: orderReducer,
  name: nameReducer,
  form: formReducer,
  type: typeReducer,
  area: areaReducer,
  pokemonlist: pokemonlistReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
