import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const PostForm = ({ titleLabel, contentLabel, blog, setBlog, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{titleLabel}</Text>
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
      <Text style={styles.label}>{contentLabel}</Text>
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
        title="SUBMIT"
        onPress={() => {
          return onSubmit();
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

export default PostForm;
