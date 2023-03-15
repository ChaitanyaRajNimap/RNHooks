import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';

const UseEffectFetchData = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [idFromBtn]);

  const handlePress = () => {
    setIdFromBtn(id);
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <TextInput
        value={id.toString()}
        onChangeText={text => setId(text)}
        style={styles.textInputStyle}
      />
      <Button title="Fetch Post" onPress={handlePress} />
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
