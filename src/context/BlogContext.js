import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  console.log(`State -> ${JSON.stringify(state)}`);
  switch (action.type) {
    case "get_blogs":
      return action.payload;
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
        return blog.id === action.payload.id ? action.payload : blog;
      });
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return async (blog, cb) => {
    await jsonServer.post("/blogs", blog);
    // dispatch({
    //   type: "add_blog",
    //   payload: blog,
    // });
    cb();
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogs/${id}`);
    dispatch({
      type: "delete_blog",
      payload: id,
    });
  };
};

const updateBlog = (dispatch) => {
  return async (blog, cb) => {
    await jsonServer.put(`/blogs/${blog.id}`, blog);
    // dispatch({
    //   type: "update_blog",
    //   payload: blog,
    // });

    cb();
  };
};

const getBlogs = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogs");
    dispatch({ type: "get_blogs", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog, updateBlog, getBlogs },
  []
);
