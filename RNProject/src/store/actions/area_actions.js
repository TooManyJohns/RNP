import {
    AREA_SELECT_JOHTO,
    AREA_SELECT_UNKNOWN,
    AREA_SELECT_KANTO,
    AREA_SELECT_DASHES,
    AREA_SELECT_RESET
  } from "./action_types";
  
  export const areaJohto = () => {
    return {
      type: AREA_SELECT_JOHTO,
    };
  };

  export const areaUnknown = () => {
    return {
      type: AREA_SELECT_UNKNOWN,
    };
  };

  export const areaKanto = () => {
    return {
      type: AREA_SELECT_KANTO,
    };
  };

  export const areaDASHES = () => {
    return {
      type: AREA_SELECT_DASHES,
    };
  };

  export const areaReset = () => {
    return {
      type: AREA_SELECT_RESET,
    };
  };





