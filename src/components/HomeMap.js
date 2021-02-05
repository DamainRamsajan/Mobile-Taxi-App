import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>Home Map</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#a5abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
