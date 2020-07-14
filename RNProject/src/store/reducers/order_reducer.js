import {
  ORDER_SELECT_NUMERICAL,
  ORDER_SELECT_ATOZ,
  ORDER_SELECT_TALLEST,
  ORDER_SELECT_SMALLEST,
  ORDER_SELECT_HEAVIEST,
  ORDER_SELECT_LIGHTEST,
  ORDER_SELECT_RESET
} from "../actions/action_types";

import NumericalTxt from "assets/search/orderFilter/Numerical.png";
import AtoZTxt from "assets/search/orderFilter/AtoZ.png";
import TallestTxt from "assets/search/orderFilter/Tallest.png";
import SmallestTxt from "assets/search/orderFilter/Smallest.png";
import HeaviestTxt from "assets/search/orderFilter/Heaviest.png";
import LightestTxt from "assets/search/orderFilter/Lightest.png";

const initialState = {
  orderSelect: NumericalTxt,
  filter:1
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SELECT_NUMERICAL:
      return {
        ...state,
        orderSelect: NumericalTxt,
        filter:1
      };

    case ORDER_SELECT_ATOZ:
      return {
        ...state,
        orderSelect: AtoZTxt,
        filter:2
      };

    case ORDER_SELECT_TALLEST:
      return {
        ...state,
        orderSelect: TallestTxt,
        filter:5
      };

    case ORDER_SELECT_SMALLEST:
      return {
        ...state,
        orderSelect: SmallestTxt,
        filter:6
      };

    case ORDER_SELECT_HEAVIEST:
      return {
        ...state,
        orderSelect: HeaviestTxt,
        filter:3
      };

    case ORDER_SELECT_LIGHTEST:
      return {
        ...state,
        orderSelect: LightestTxt,
        filter:4
      };

    case ORDER_SELECT_RESET:
      return {
        ...state,
        orderSelect: initialState.orderSelect,
        filter:initialState.filter
      };

    default:
      return state;
  }
};

export default orderReducer;
