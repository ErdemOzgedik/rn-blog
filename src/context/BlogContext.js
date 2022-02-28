import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();
const reducer = (state, action) => {
  console.log(`State -> ${JSON.stringify(state)}`);
  switch (action.type) {
    case "add":
      return { ...state, blogs: [...state.blogs, action.payload] };
    case "delete":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => {
          return blog.title !== action.payload.title;
        }),
      };
    case "update":
      return {
        ...state,
        blogs: state.blogs.map((blog) => {
          if (blog.title === action.payload.title) {
            blog.title = action.payload.newTitle;
            blog.content = action.payload.newContent;
          }
          return blog;
        }),
      };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    blogs: [],
  });

  return (
    <BlogContext.Provider
      value={{
        data: state.blogs,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
