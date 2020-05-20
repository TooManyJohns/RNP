import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import { AppRegistry } from "react-native"; //loads React component onto the screen
import App from "./App";
import { name as appName } from "./app.json";

console.disableYellowBox = true; //disable yellow warnings appearing on app screen when making changes

AppRegistry.registerComponent(appName, () => App); //component being loaded is App.js
