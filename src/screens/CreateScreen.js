import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const { addBlog } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={blog.title}
        onChangeText={(title) => {
          setBlog({
            ...blog,
            title,
          });
        }}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={blog.content}
        onChangeText={(content) => {
          setBlog({
            ...blog,
            content,
          });
        }}
      />
      <Button
        title="CREATE"
        onPress={() => {
          addBlog(blog, () => {
            navigation.navigate("Home");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
});

export default CreateScreen;
