import {
    NAME_SELECT_A,
    NAME_SELECT_B,
    NAME_SELECT_C,
    NAME_SELECT_D,
    NAME_SELECT_E,
    NAME_SELECT_F,
    NAME_SELECT_G,
    NAME_SELECT_H,
    NAME_SELECT_I,
    NAME_SELECT_J,
    NAME_SELECT_K,
    NAME_SELECT_L,
    NAME_SELECT_M,
    NAME_SELECT_N,
    NAME_SELECT_O,
    NAME_SELECT_P,
    NAME_SELECT_Q,
    NAME_SELECT_R,
    NAME_SELECT_S,
    NAME_SELECT_T,
    NAME_SELECT_U,
    NAME_SELECT_V,
    NAME_SELECT_W,
    NAME_SELECT_X,
    NAME_SELECT_Y,
    NAME_SELECT_Z,
    NAME_SELECT_DASH,
    NAME_SELECT_RESET,
  } from "../actions/action_types";
  
  import img_A from "assets/search/nameFilter/letters/A.png";
  import img_B from "assets/search/nameFilter/letters/B.png";
  import img_C from "assets/search/nameFilter/letters/C.png";
  import img_D from "assets/search/nameFilter/letters/D.png";
  import img_E from "assets/search/nameFilter/letters/E.png";
  import img_F from "assets/search/nameFilter/letters/F.png";
  import img_G from "assets/search/nameFilter/letters/G.png";
  import img_H from "assets/search/nameFilter/letters/H.png";
  import img_I from "assets/search/nameFilter/letters/I.png";
  import img_J from "assets/search/nameFilter/letters/J.png";
  import img_K from "assets/search/nameFilter/letters/K.png";
  import img_L from "assets/search/nameFilter/letters/L.png";
  import img_M from "assets/search/nameFilter/letters/M.png";
  import img_N from "assets/search/nameFilter/letters/N.png";
  import img_O from "assets/search/nameFilter/letters/O.png";
  import img_P from "assets/search/nameFilter/letters/P.png";
  import img_Q from "assets/search/nameFilter/letters/Q.png";
  import img_R from "assets/search/nameFilter/letters/R.png";
  import img_S from "assets/search/nameFilter/letters/S.png";
  import img_T from "assets/search/nameFilter/letters/T.png";
  import img_U from "assets/search/nameFilter/letters/U.png";
  import img_V from "assets/search/nameFilter/letters/V.png";
  import img_W from "assets/search/nameFilter/letters/W.png";
  import img_X from "assets/search/nameFilter/letters/X.png";
  import img_Y from "assets/search/nameFilter/letters/Y.png";
  import img_Z from "assets/search/nameFilter/letters/Z.png";
  import img_DASH from "assets/search/nameFilter/letters/DASH.png";
  
  const initialState = {
    nameSelect: img_DASH,
    filter:27
  };
  
  const nameReducer = (state = initialState, action) => {
    switch (action.type) {
      case NAME_SELECT_A:
        return {
          ...state,
          nameSelect: img_A,
          filter:1
        };
  
      case NAME_SELECT_B:
        return {
          ...state,
          nameSelect: img_B,
          filter:2
        };
  
      case NAME_SELECT_C:
        return {
          ...state,
          nameSelect: img_C,
          filter:3
        };
  
      case NAME_SELECT_D:
        return {
          ...state,
          nameSelect: img_D,
          filter:4
        };
  
      case NAME_SELECT_E:
        return {
          ...state,
          nameSelect: img_E,
          filter:5
        };
  
      case NAME_SELECT_F:
        return {
          ...state,
          nameSelect: img_F,
          filter:6
        };
  
      case NAME_SELECT_G:
        return {
          ...state,
          nameSelect: img_G,
          filter:7
        };
  
      case NAME_SELECT_H:
        return {
          ...state,
          nameSelect: img_H,
          filter:8
        };
  
      case NAME_SELECT_I:
        return {
          ...state,
          nameSelect: img_I,
          filter:9
        };
  
      case NAME_SELECT_J:
        return {
          ...state,
          nameSelect: img_J,
          filter:10
        };
  
      case NAME_SELECT_K:
        return {
          ...state,
          nameSelect: img_K,
          filter:11
        };
  
      case NAME_SELECT_L:
        return {
          ...state,
          nameSelect: img_L,
          filter:12
        };
  
      case NAME_SELECT_M:
        return {
          ...state,
          nameSelect: img_M,
          filter:13
        };
  
      case NAME_SELECT_N:
        return {
          ...state,
          nameSelect: img_N,
          filter:14
        };
  
      case NAME_SELECT_O:
        return {
          ...state,
          nameSelect: img_O,
          filter:15
        };
  
      case NAME_SELECT_P:
        return {
          ...state,
          nameSelect: img_P,
          filter:16
        };
  
      case NAME_SELECT_Q:
        return {
          ...state,
          nameSelect: img_Q,
          filter:17
        };
  
      case NAME_SELECT_R:
        return {
          ...state,
          nameSelect: img_R,
          filter:18
        };
  
      case NAME_SELECT_S:
        return {
          ...state,
          nameSelect: img_S,
          filter:19
        };
  
      case NAME_SELECT_T:
        return {
          ...state,
          nameSelect: img_T,
          filter:20
        };
  
      case NAME_SELECT_U:
        return {
          ...state,
          nameSelect: img_U,
          filter:21
        };
  
      case NAME_SELECT_V:
        return {
          ...state,
          nameSelect: img_V,
          filter:22
        };
  
      case NAME_SELECT_W:
        return {
          ...state,
          nameSelect: img_W,
          filter:23
        };
  
      case NAME_SELECT_X:
        return {
          ...state,
          nameSelect: img_X,
          filter:24
        };
  
      case NAME_SELECT_Y:
        return {
          ...state,
          nameSelect: img_Y,
          filter:25
        };
  
      case NAME_SELECT_Z:
        return {
          ...state,
          nameSelect: img_Z,
          filter:26
        };
  
      case NAME_SELECT_DASH:
        return {
          ...state,
          nameSelect: img_DASH,
          filter:27
        };
  
      case NAME_SELECT_RESET:
        return {
          ...state,
          nameSelect: initialState.nameSelect,
          filter: initialState.filter
        };
      default:
        return state;
    }
  };
  
  export default nameReducer;