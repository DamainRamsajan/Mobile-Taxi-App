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

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('redirect to results page');
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
          styles={{textInput: styles.textInput}}
          query={{
            key: 'AIzaSyAC9D2fMi7jofyo9Sw3Wd9AG47FQWTLmkY',
            language: 'en',
          }}
        />

        <View style={styles.destinationContainer}>
          <GooglePlacesAutocomplete
            placeholder="Where Too"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setDestinationPlace({data, details});
            }}
            fetchDetails
            styles={{textInput: styles.textInput}}
            query={{
              key: 'AIzaSyAC9D2fMi7jofyo9Sw3Wd9AG47FQWTLmkY',
              language: 'en',
            }}
          />
          <FontAwesome
            style={styles.plusIcon}
            name="plus-square"
            size={22}
            color="lightgrey"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    height: 50,
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    width: Dimensions.get('screen').width - 40,
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  plusIcon: {
    marginLeft: 3,
    marginRight: 3,
  },
});
