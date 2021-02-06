import React, {useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import typeData from '../assets/data/types';
import TaxiTypeRow from './TaxiTypeRow';

const TaxiTypes = () => {
  const confirm = () => {
    console.warn('confirm button has been pressed');
  };

  return (
    <View style={styles.container}>
      {typeData.map((type) => (
        <TaxiTypeRow type={type} />
      ))}

      <Pressable onPress={confirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Taxi </Text>
      </Pressable>
    </View>
  );
};

export default TaxiTypes;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  confirmButton: {
    width: '100%',
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: Dimensions.get('screen').width - 40,
    borderRadius: 12,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
