import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import axios from 'axios';

const UseEffectFetchData = () => {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <ScrollView style={styles.rootContainer}>
      <TextInput
        value={id.toString()}
        onChangeText={text => setId(text)}
        style={styles.textInputStyle}
      />
      <Text style={styles.heading}>
        {post.id}. {post.title}
      </Text>
      {/* {posts.map(post => (
        <Text style={styles.heading} key={post.id}>
          {post.id}. {post.title}
        </Text>
      ))} */}
    </ScrollView>
  );
};

export default UseEffectFetchData;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
