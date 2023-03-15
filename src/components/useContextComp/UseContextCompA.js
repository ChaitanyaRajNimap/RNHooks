import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UseContextCompB from './UseContextCompB';

const UseContextCompA = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Component A</Text>
      <UseContextCompB />
    </View>
  );
};

export default UseContextCompA;

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
