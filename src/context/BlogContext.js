import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  console.log(`State -> ${JSON.stringify(state)}`);
  switch (action.type) {
    case "add_blog":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "delete_blog":
      return state;
    case "update_blog":
      return state;
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({
      type: "add_blog",
      payload: {
        title: "title #1",
        content: "content #1",
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog },
  []
);
