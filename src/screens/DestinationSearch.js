import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Current Location"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
          }}
          fetchDetails
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {position: 'absolute', top: 10, left: 10, right: 10},
            listView: {
              position: 'absolute',
              top: 125,
              // backgroundColor: 'white',
              zIndex: 999,
              padding: 10,
            },
            separator: styles.separator,
          }}
          query={{
            key: 'AIzaSyAC9D2fMi7jofyo9Sw3Wd9AG47FQWTLmkY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* <View style={styles.destinationContainer}> */}
        <GooglePlacesAutocomplete
          placeholder="Where Too"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
          }}
          fetchDetails
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {position: 'absolute', top: 70, left: 10, right: 10},
            listView: {
              position: 'absolute',
              top: 65,
              // backgroundColor: 'white',
              zIndex: 999,
              padding: 10,
            },
            separator: styles.separator,
          }}
          query={{
            key: 'AIzaSyAC9D2fMi7jofyo9Sw3Wd9AG47FQWTLmkY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        {/* <FontAwesome
            style={styles.plusIcon}
            name="plus-square"
            size={22}
            color="lightgrey"
          /> */}
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: 47,
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 8,
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    top: 80,
    left: 10,
    right: 10,
  },
  plusIcon: {
    marginLeft: 3,
    marginRight: 3,
  },
  separator: {
    backgroundColor: '#dddddd',
    height: 1,
  },
});
