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

import Normal from "assets/search/typeFilter/types/Normal.png";
import Ground from "assets/search/typeFilter/types/Ground.png";
import Steel from "assets/search/typeFilter/types/Steel.png";
import Electric from "assets/search/typeFilter/types/Electric.png";
import Dark from "assets/search/typeFilter/types/Dark.png";
import Fight from "assets/search/typeFilter/types/Fight.png";
import Rock from "assets/search/typeFilter/types/Rock.png";
import Fire from "assets/search/typeFilter/types/Fire.png";
import Psychic from "assets/search/typeFilter/types/Psychic.png";
import Dashes from "assets/search/typeFilter/types/Dashes.png";
import Flying from "assets/search/typeFilter/types/Flying.png";
import Bug from "assets/search/typeFilter/types/Bug.png";
import Water from "assets/search/typeFilter/types/Water.png";
import Ice from "assets/search/typeFilter/types/Ice.png";
import Poison from "assets/search/typeFilter/types/Poison.png";
import Ghost from "assets/search/typeFilter/types/Ghost.png";
import Grass from "assets/search/typeFilter/types/Grass.png";
import Dragon from "assets/search/typeFilter/types/Dragon.png";

const initialState = {
  typeSelectOne: Dashes,
  typeSelectTwo: Dashes,
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SELECT_NORMAL:
      return {
        ...state,
        typeSelectOne: Normal,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_GROUND:
      return {
        ...state,
        typeSelectOne: Ground,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_STEEL:
      return {
        ...state,
        typeSelectOne: Steel,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_ELECTRIC:
      return {
        ...state,
        typeSelectOne: Electric,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_DARK:
      return {
        ...state,
        typeSelectOne: Dark,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_FIGHT:
      return {
        ...state,
        typeSelectOne: Fight,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_ROCK:
      return {
        ...state,
        typeSelectOne: Rock,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_FIRE:
      return {
        ...state,
        typeSelectOne: Fire,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_PSYCHIC:
      return {
        ...state,
        typeSelectOne: Psychic,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_DASHES:
      return {
        ...state,
        typeSelectOne: Dashes,
        typeSelectTwo: state.typeSelectOne,
      };

    case TYPE_SELECT_FLYING:
      return {
        ...state,
        typeSelectOne: Flying,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_BUG:
      return {
        ...state,
        typeSelectOne: Bug,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_WATER:
      return {
        ...state,
        typeSelectOne: Water,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_ICE:
      return {
        ...state,
        typeSelectOne: Ice,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_POISON:
      return {
        ...state,
        typeSelectOne: Poison,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_GHOST:
      return {
        ...state,
        typeSelectOne: Ghost,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_GRASS:
      return {
        ...state,
        typeSelectOne: Grass,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_DRAGON:
      return {
        ...state,
        typeSelectOne: Dragon,
        typeSelectTwo: state.typeSelectOne,
      };
    case TYPE_SELECT_RESET:
      return {
        ...state,
        typeSelectOne: initialState.typeSelectOne,
        typeSelectTwo: initialState.typeSelectTwo,
      };

    default:
      return state;
  }
};

export default typeReducer;
