import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [blog, setBlog] = useState({});
  const { state } = useContext(BlogContext);

  useEffect(() => {
    setBlog(
      state.filter((blog) => {
        return blog.id === id;
      })[0]
    );
  }, []);

  return (
    <View>
      <Button
        title="Update Post"
        onPress={() => {
          alert("Will Update");
        }}
      />
      {!blog.title ? (
        <Text>Loadinggg.....</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{blog.title}</Text>
          <Text>{blog.content} </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
});

export default DetailScreen;
