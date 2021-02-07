import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TaxiTypeRow = ({type}) => {
  const getImage = () => {
    if (type.type === 'TaxiX') {
      return require('../assets/images/TaxiX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../assets/images/Comfort.jpeg');
    }
    if (type.type === 'TaxiXL') {
      return require('../assets/images/TaxiXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.carPicture} source={getImage()} />

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{type.type}</Text>
          <Ionicons
            style={styles.plusIcon}
            name="person"
            size={16}
            color="black"
          />
        </View>

        <Text style={styles.time}>8:{type.duration}PM drop off </Text>
      </View>

      <View style={styles.priceContainer}>
        <Ionicons
          style={styles.plusIcon}
          name="pricetag"
          size={16}
          color="green"
        />
        <Text style={styles.price}>est. ${type.price}</Text>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  carPicture: {
    width: 60,
    height: 40,
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
