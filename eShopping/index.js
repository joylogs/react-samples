/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
})

AppRegistry.registerComponent(appName, () => App);
