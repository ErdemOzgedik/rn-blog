import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  console.log(`State -> ${JSON.stringify(state)}`);
  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
          content: `sample content for this post`,
        },
      ];
    case "delete_blog":
      return state.filter((blog) => {
        return blog.id !== action.payload;
      });
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
    });
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({
      type: "delete_blog",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog },
  []
);
