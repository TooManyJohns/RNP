import {
    ORDER_SELECT_NUMERICAL,
    ORDER_SELECT_ATOZ,
    ORDER_SELECT_TALLEST,
    ORDER_SELECT_SMALLEST,
    ORDER_SELECT_HEAVIEST,
    ORDER_SELECT_LIGHTEST,
  } from "./action_types";
  
  export const orderNumerical = () => {
    return {
      type: ORDER_SELECT_NUMERICAL,
    };
  };
  
  export const orderAtoZ = () => {
    return {
      type: ORDER_SELECT_ATOZ,
    };
  };
  
  export const orderTallest = () => {
    return {
      type: ORDER_SELECT_TALLEST,
    };
  };
  
  export const orderSmallest = () => {
    return {
      type: ORDER_SELECT_SMALLEST,
    };
  };
  
  export const orderHeaviest = () => {
    return {
      type: ORDER_SELECT_HEAVIEST,
    };
  };
  
  export const orderLightest = () => {
    return {
      type: ORDER_SELECT_LIGHTEST,
    };
  };
  