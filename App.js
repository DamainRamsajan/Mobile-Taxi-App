import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import DestinationSearch from './src/screens/DestinationSearch';
import Home from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: 'black'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Taxi App Camera Permission',
          message:
            'The Taxi App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    }
    // else {
    //   Geolocation.requestAuthorization();
    // }
  }, []);

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
