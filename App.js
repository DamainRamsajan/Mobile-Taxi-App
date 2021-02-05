import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import Home from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      {/* <Home /> */}
      <DestinationSearch />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
