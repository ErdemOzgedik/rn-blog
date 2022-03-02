import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Foundation } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [blog, setBlog] = useState({});
  const { state } = useContext(BlogContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Foundation
            name="pencil"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Edit", { id });
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setBlog(
      state.filter((blog) => {
        return blog.id === id;
      })[0]
    );
  }, []);

  return (
    <View>
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
