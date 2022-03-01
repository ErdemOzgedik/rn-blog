import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  console.log(`State -> ${JSON.stringify(state)}`);
  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
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
  return (blog, cb) => {
    dispatch({
      type: "add_blog",
      payload: blog,
    });

    cb();
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
