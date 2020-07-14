import {
    AREA_SELECT_JOHTO,
    AREA_SELECT_UNKNOWN,
    AREA_SELECT_KANTO,
    AREA_SELECT_DASHES,
    AREA_SELECT_RESET,
  } from "../actions/action_types";
  
  import Johto from "assets/search/areaFilter/areas/Johto.png";
  import Unknown from "assets/search/areaFilter/areas/Unknown.png";
  import Kanto from "assets/search/areaFilter/areas/Kanto.png";
  import DASHES from "assets/search/areaFilter/areas/DASHES.png";
  
  const initialState = {
    areaSelect: DASHES,
    filter: 4,
  };
  
  const areaReducer = (state = initialState, action) => {
    switch (action.type) {
      case AREA_SELECT_JOHTO:
        return {
          ...state,
          areaSelect: Johto,
          filter: 1,
        };
  
     case AREA_SELECT_UNKNOWN:
        return {
          ...state,
          areaSelect: Unknown,
          filter: 2,
        };

      case AREA_SELECT_KANTO:
        return {
          ...state,
          areaSelect: Kanto,
          filter: 3,
        };
  
      case AREA_SELECT_DASHES:
        return {
          ...state,
          areaSelect: DASHES,
          filter: 4,
        };
  
      case AREA_SELECT_RESET:
        return {
          ...state,
          areaSelect: initialState.areaSelect,
          filter: initialState.filter,
        };
  
      default:
        return state;
    }
  };
  
  export default areaReducer;
  