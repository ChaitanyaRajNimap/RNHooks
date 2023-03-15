import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UseContextCompC from './UseContextCompC';

const UseContextCompB = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Component B</Text>
      <UseContextCompC />
    </View>
  );
};

export default UseContextCompB;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
