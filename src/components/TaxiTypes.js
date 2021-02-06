import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TaxiTypeRow from './TaxiTypeRow';

const TaxiTypes = () => {
  return (
    <View>
      <TaxiTypeRow />
      <TaxiTypeRow />
      <TaxiTypeRow />
    </View>
  );
};

export default TaxiTypes;

const styles = StyleSheet.create({});
