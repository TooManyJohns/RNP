/**
 * @format
 */

import {AppRegistry} from 'react-native'; //loads React component onto the screen
import App from './App';
import {name as appName} from './app.json';

import * as firebase from 'firebase';

var firebaseConfig = {

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


console.disableYellowBox = true //disable yellow warnings appearing on app screen when making changes

AppRegistry.registerComponent(appName, () => App); //component being loaded is App.js
