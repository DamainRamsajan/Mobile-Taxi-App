import React from 'react';
import {StyleSheet, FlatList, View, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../assets/data/cars';

const HomeMap = () => {
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../assets/images/top-Comfort.png');
    }
    return require('../assets/images/top-UberXL.png');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        {cars.map((car) => (
          <Marker
            id={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                transform: [{rotate: `${car.heading}deg`}],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 330,
    backgroundColor: '#a5abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
