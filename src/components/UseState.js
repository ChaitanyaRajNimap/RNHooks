import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UseState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Count : {count} </Text>
      <Button title="Reset" onPress={() => setCount(initialCount)} />
      <Button
        title="Increment"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
      <Button
        title="Decrement"
        onPress={() => setCount(prevCount => prevCount - 1)}
      />
      <Button title="Increment By 5" onPress={incrementByFive} />
    </View>
  );
};

export default UseState;

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
