/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import Home from './src/Screens/Home';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
