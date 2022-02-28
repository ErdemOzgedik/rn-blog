import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Button
        title="Add Post"
        onPress={() => {
          dispatch({
            type: "add",
            payload: {
              title: "title #1",
              content: "content #1",
            },
          });
        }}
      />
      <Button
        title="Delete Post"
        onPress={() => {
          dispatch({
            type: "delete",
            payload: {
              title: "title #1",
            },
          });
        }}
      />
      <Button
        title="Update Post"
        onPress={() => {
          dispatch({
            type: "update",
            payload: {
              title: "title #1",
              newTitle: "title updated",
            },
          });
        }}
      />
      <FlatList
        data={data}
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
