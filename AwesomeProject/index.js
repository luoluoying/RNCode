/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainComponents from './main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainComponents);
