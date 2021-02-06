import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Pressable onPress={() => navigation.navigate('DestinationSearch')}>
          <Text style={styles.input}>Where Too?</Text>
        </Pressable>

        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={30} color="black" />
          <Text>Now</Text>
          <FontAwesome name="caret-down" size={30} color="black" />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={25} color="white" />
        </View>

        <Text style={styles.destination}>Spin Nightclub</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#2B67E2'}]}>
          <Entypo name="home" size={25} color="white" />
        </View>

        <Text style={styles.destination}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 8,
  },
  inputBox: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: Dimensions.get('screen').width - 20,
    padding: 5,
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
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    // width: 40,
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
  },

  destination: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
