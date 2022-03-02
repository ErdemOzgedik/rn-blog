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
      return state.map((blog) => {
        if (blog.id === action.payload.id) {
          blog.title = action.payload.title;
          blog.content = action.payload.content;
        }
        return blog;
      });
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

const updateBlog = (dispatch) => {
  return (blog, cb) => {
    dispatch({
      type: "update_blog",
      payload: blog,
    });

    cb();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog, updateBlog },
  [
    { id: 1, title: "Mock Post Title #1", content: "Mock content for blog" },
    { id: 2, title: "Mock Post Title #2", content: "Mock content for blog" },
  ]
);
