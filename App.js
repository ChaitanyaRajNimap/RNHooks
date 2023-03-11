import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UseEffect from './src/components/UseEffect';
import UseEffectFetchData from './src/components/UseEffectFetchData';
import UseState from './src/components/UseState';
import UseStateWithArr from './src/components/UseStateWithArr';
import UseStateWithObj from './src/components/UseStateWithObj';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <UseState /> */}
      {/* <UseStateWithObj /> */}
      {/* <UseStateWithArr /> */}
      {/* <UseEffect /> */}
      <UseEffectFetchData />
    </View>
  );
};

export default App;
