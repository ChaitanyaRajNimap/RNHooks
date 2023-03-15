import React, {createContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UseContextCompA from './src/components/useContextComp/UseContextCompA';
import UseEffect from './src/components/UseEffect';
import UseEffectFetchData from './src/components/UseEffectFetchData';
import UseState from './src/components/UseState';
import UseStateWithArr from './src/components/UseStateWithArr';
import UseStateWithObj from './src/components/UseStateWithObj';

export const UserContext = createContext();
export const ChannelContext = createContext();

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <UseState /> */}
      {/* <UseStateWithObj /> */}
      {/* <UseStateWithArr /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectFetchData /> */}
      <UserContext.Provider value={'Pirate Hunter'}>
        <ChannelContext.Provider value={'Zoro'}>
          <UseContextCompA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </View>
  );
};

export default App;
