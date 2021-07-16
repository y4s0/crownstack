import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import RootNavigator from './navigation/RootNavigator';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
}


