import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import PostForm from "../components/PostForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [blog, setBlog] = useState({});
  const { state, updateBlog } = useContext(BlogContext);

  useEffect(() => {
    setBlog(
      state.find((blog) => {
        return blog.id === id;
      })
    );
  }, []);

  const onSubmit = () => {
    updateBlog(blog, () => {
      navigation.navigate("Home");
    });
  };

  return (
    <PostForm
      titleLabel="Enter New Title"
      contentLabel="Enter New Content"
      blog={blog}
      setBlog={setBlog}
      onSubmit={onSubmit}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
