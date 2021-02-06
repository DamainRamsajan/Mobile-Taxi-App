import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeMap from '../components/HomeMap';
import TaxiTypes from '../components/TaxiTypes';

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <TaxiTypes />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
