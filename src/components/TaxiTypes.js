import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import typeData from '../assets/data/types';
import TaxiTypeRow from './TaxiTypeRow';

const TaxiTypes = () => {
  return (
    <View>
      {typeData.map((type) => (
        <TaxiTypeRow type={type} />
      ))}
    </View>
  );
};

export default TaxiTypes;

const styles = StyleSheet.create({});
