import { pokemonlistRef } from "../../firebase/firebaseTesting";

import {
    FETCH_POKEMONLIST,
  } from "./action_types";

  export const fetchPokemonlist = () => async dispatch => {
    pokemonlistRef.on("value", snapshot => {
      dispatch({
        type: FETCH_POKEMONLIST,
        payload: snapshot.val()
      });
    });
  };