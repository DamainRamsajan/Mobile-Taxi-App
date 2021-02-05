import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Travel only if Necessary</Text>
      <Text style={styles.textBody}>
        Covid safety measures: Daily symptom self-assessment, Physical
        distancing - Maintain 6 feet distance from others, Stay out of crowded
        places and avoid large groups, Use face coverings, Practice frequent
        hand hygiene, Follow respiratory etiquette and Limit non-essential
        travel.
      </Text>
      <Text style={styles.learnMore}>Learn More..</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#2B67E2',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBody: {
    color: 'whitesmoke',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
