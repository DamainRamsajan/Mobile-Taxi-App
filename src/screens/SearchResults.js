import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RouteMap from '../components/RouteMap';
import TaxiTypes from '../components/TaxiTypes';

const SearchResults = () => {
  return (
    <View>
      <RouteMap />
      <TaxiTypes />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
