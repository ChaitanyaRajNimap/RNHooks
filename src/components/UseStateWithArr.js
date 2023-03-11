import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UseStateWithArr = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <View style={styles.rootContainer}>
      <Button title="Add a number" onPress={addItem} />
      {items.map(item => (
        <Text style={styles.heading} key={item.id}>
          {item.value}
        </Text>
      ))}
    </View>
  );
};

export default UseStateWithArr;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
