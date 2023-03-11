import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Count : {count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(prevVal => prevVal + 1)}
      />
    </View>
  );
};

export default UseEffect;

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
