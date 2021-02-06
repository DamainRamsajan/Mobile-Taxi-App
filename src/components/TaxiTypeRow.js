import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TaxiTypeRow = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.carPicture}
        source={require('../assets/images/UberX.jpeg')}
      />

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>taxi title</Text>
          <Ionicons
            style={styles.plusIcon}
            name="person"
            size={16}
            color="black"
          />
        </View>

        <Text style={styles.time}>taxi timiing</Text>
      </View>

      <View style={styles.priceContainer}>
        <Ionicons
          style={styles.plusIcon}
          name="pricetag"
          size={16}
          color="green"
        />
        <Text style={styles.price}>est. $26</Text>
      </View>
    </View>
  );
};

export default TaxiTypeRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  carPicture: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  textContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    width: 100,
  },
  price: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
