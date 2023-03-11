import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const UseStateWithObj = () => {
  const [name, setName] = useState({
    fName: '',
    lName: '',
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Your First Name : {name.fName}</Text>
      <Text style={styles.heading}>Your Last Name : {name.lName}</Text>
      <TextInput
        value={name.fName}
        placeholder="Enter first name"
        onChangeText={text => setName({...name, fName: text})}
        style={styles.textInputStyle}
      />
      <TextInput
        value={name.lName}
        placeholder="Enter Last name"
        onChangeText={text => setName({...name, lName: text})}
        style={styles.textInputStyle}
      />
    </View>
  );
};

export default UseStateWithObj;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInputStyle: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    marginBottom: 20,
  },
});
