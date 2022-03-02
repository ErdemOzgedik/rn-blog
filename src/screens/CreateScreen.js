import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PostForm from "../components/PostForm";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const { addBlog } = useContext(BlogContext);

  const onSubmit = () => {
    addBlog(blog, () => {
      navigation.navigate("Home");
    });
  };

  return (
    <PostForm
      titleLabel="Enter Title"
      contentLabel="Enter Content"
      blog={blog}
      setBlog={setBlog}
      onSubmit={onSubmit}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
