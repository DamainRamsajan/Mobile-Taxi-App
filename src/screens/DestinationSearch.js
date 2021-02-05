import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          style={[styles.textInput, {backgroundColor: 'whitesmoke'}]}
          placeholder="Current Location"
          onChangeText={setFromText}
        />
        <View style={styles.destinationContainer}>
          <TextInput
            value={destinationText}
            style={styles.textInput}
            placeholder="Where Too?"
            onChangeText={setDestinationText}
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
