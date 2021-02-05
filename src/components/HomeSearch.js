import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ClockIcon from 'react-native-vector-icons/AntDesign';
import CaretIcon from 'react-native-vector-icons/FontAwesome';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.input}>Where Too?</Text>

        <View style={styles.timeContainer}>
          <ClockIcon name="clockcircle" size={30} color="black" />
          <Text>Now</Text>
          <CaretIcon name="caret-down" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputBox: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: Dimensions.get('screen').width - 20,
    padding: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 120,
    borderRadius: 30,
    backgroundColor: 'whitesmoke',
    padding: 10,
    // marginVertical: 10,
  },
});
