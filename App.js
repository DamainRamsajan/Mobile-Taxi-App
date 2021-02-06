import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import DestinationSearch from './src/screens/DestinationSearch';
import Home from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: 'black'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Where are you going today?'}}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearch}
          options={{title: 'Search for your Destination'}}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{title: 'Choose your Taxi Type'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
