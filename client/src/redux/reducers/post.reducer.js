import * as types from "../constants/post.constants";

const initialState = {
  posts: [],
  loading: false,
  totalPageNum: 1,
  selectedBlog: null,
};

const postReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.READ_POSTS:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.CREATE_POST_SUCCESS:
    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default postReducer;
