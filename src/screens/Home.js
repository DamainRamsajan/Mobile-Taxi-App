import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CovidMessage from '../components/CovidMessage';
import HomeMap from '../components/HomeMap';
import HomeSearch from '../components/HomeSearch';

const Home = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
