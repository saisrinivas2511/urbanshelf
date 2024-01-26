import React from 'react';
import {BottomNavigator} from './src/Navigation/BottomNavigator';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <BottomNavigator />
    </Provider>
  );
};

export default App;
