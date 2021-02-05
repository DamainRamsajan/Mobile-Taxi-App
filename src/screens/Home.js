import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CovidMessage from '../components/CovidMessage';
import HomeMap from '../components/HomeMap';

const Home = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
