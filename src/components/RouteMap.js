import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const origin = {latitude: 28.450627, longitude: -16.263045};
  const destination = {latitude: 28.460127, longitude: -16.269845};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAC9D2fMi7jofyo9Sw3Wd9AG47FQWTLmkY';

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
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="green"
        />
        <Marker coordinate={origin} title={'origin'} />
        <Marker coordinate={destination} title={'destination'} />
      </MapView>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  container: {
    height: 360,
    backgroundColor: '#a5abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
