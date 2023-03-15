import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserContext, ChannelContext} from '../../../App';

const UseContextCompC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Component C</Text>
      <Text style={styles.heading}>
        Moshi Moshi {user} {channel}
      </Text>
    </View>
  );
};

export default UseContextCompC;

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
