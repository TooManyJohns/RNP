import {
  ORDER_SELECT_NUMERICAL,
  ORDER_SELECT_ATOZ,
  ORDER_SELECT_TALLEST,
  ORDER_SELECT_SMALLEST,
  ORDER_SELECT_HEAVIEST,
  ORDER_SELECT_LIGHTEST,
} from "../actions/action_types";

import NumericalTxt from "assets/search/Numerical.png";
import AtoZTxt from "assets/search/AtoZ.png";
import TallestTxt from "assets/search/Tallest.png";
import SmallestTxt from "assets/search/Smallest.png";
import HeaviestTxt from "assets/search/Heaviest.png";
import LightestTxt from "assets/search/Lightest.png";

const initialState = {
  orderSelect: NumericalTxt,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SELECT_NUMERICAL:
      return {
        ...state,
        orderSelect: NumericalTxt,
      };

    case ORDER_SELECT_ATOZ:
      return {
        ...state,
        orderSelect: AtoZTxt,
      };

    case ORDER_SELECT_TALLEST:
      return {
        ...state,
        orderSelect: TallestTxt,
      };

    case ORDER_SELECT_SMALLEST:
      return {
        ...state,
        orderSelect: SmallestTxt,
      };

    case ORDER_SELECT_HEAVIEST:
      return {
        ...state,
        orderSelect: HeaviestTxt,
      };

    case ORDER_SELECT_LIGHTEST:
      return {
        ...state,
        orderSelect: LightestTxt,
      };

    default:
      return state;
  }
};

export default orderReducer;
