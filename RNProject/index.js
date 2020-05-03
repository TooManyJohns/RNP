/**
 * @format
 */

import {AppRegistry} from 'react-native'; //loads React component onto the screen
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); //component being loaded is App.js
