import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text>Covid Message</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'green',
  },
});
