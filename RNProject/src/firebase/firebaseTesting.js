import * as firebase from "firebase";
import "firebase/firestore";



var firebaseConfig = {
    apiKey: "AIzaSyA0i6s-OeOme4Nj9hTRzvLGonen1Whg-zE",
    authDomain: "hgss-pokedex.firebaseapp.com",
    databaseURL: "https://hgss-pokedex.firebaseio.com",
    projectId: "hgss-pokedex",
    storageBucket: "hgss-pokedex.appspot.com",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
  
  export const db = firebase.firestore();
  export default {
    firebase: firebase,
  };
  
  
  //medium
  const databaseRef = firebase.database().ref();
export const pokemonlistRef = databaseRef.child("pokemonlist");
