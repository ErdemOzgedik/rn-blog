import React, { useContext, useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlog } = useContext(BlogContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Feather
            name="plus"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Create");
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Detail", {
                    id: item.id,
                  });
                }}
              >
                <Text style={styles.title}>
                  {item.title}-{item.id}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteBlog(item.id);
                }}
              >
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
