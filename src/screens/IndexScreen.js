import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlog } = useContext(BlogContext);

  return (
    <View>
      <Button
        title="Add Post"
        onPress={() => {
          addBlog();
        }}
      />
      <Button
        title="Delete Post"
        onPress={() => {
          alert("will delete");
        }}
      />
      <Button
        title="Update Post"
        onPress={() => {
          alert("will update");
        }}
      />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
