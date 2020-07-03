import {
    TYPE_SELECT_NORMAL,
    TYPE_SELECT_GROUND,
    TYPE_SELECT_STEEL,
    TYPE_SELECT_ELECTRIC,
    TYPE_SELECT_DARK,
    TYPE_SELECT_FIGHT,
    TYPE_SELECT_ROCK,
    TYPE_SELECT_FIRE,
    TYPE_SELECT_PSYCHIC,
    TYPE_SELECT_DASHES,
    TYPE_SELECT_FLYING,
    TYPE_SELECT_BUG,
    TYPE_SELECT_WATER,
    TYPE_SELECT_ICE,
    TYPE_SELECT_POISON,
    TYPE_SELECT_GHOST,
    TYPE_SELECT_GRASS,
    TYPE_SELECT_DRAGON,
    TYPE_SELECT_RESET,
  } from "../actions/action_types";
  
  import NumericalTxt from "assets/search/orderFilter/Numerical.png";
  
  
  const initialState = {
    typeSelect: NumericalTxt,
  };
  
  const typeReducer = (state = initialState, action) => {
    switch (action.type) {
      case TYPE_SELECT_NORMAL:
        return {
          ...state,
          typeSelect: NumericalTxt,
        };
  
      default:
        return state;
    }
  };
  
  export default typeReducer;
  