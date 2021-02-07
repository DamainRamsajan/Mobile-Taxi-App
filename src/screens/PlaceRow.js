import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
  console.log('data is ', {data});
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo
          style={styles.locatioinIcon}
          name="location-pin"
          size={16}
          color="black"
        />
      </View>
      <Text style={styles.locationText}>{data.description}</Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({
  row: {
    alignItems: 'baseline',
    flexDirection: 'row',
    marginVertical: 10,
    
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 15,
    marginRight: 15,
  },
  locationText: {},
});
