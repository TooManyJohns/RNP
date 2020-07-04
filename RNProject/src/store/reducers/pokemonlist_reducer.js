import {
    FETCH_POKEMONLIST,
  } from "../actions/action_types";
  


  const pokemonlistReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_POKEMONLIST:
        return {
          ...state,
          pokemonlist: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default pokemonlistReducer;
  