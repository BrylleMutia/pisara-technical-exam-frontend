import { GET_POSTS } from "./types";
import { changeTab, clearErrors, hideLoading, returnErrors, showLoading } from "./controlActions";
import axios from "axios";


export const getPosts = (page = 1) => (dispatch) => {
  dispatch(showLoading());

  axios
  .get(`/posts?page=${page}`)
    .then((response) =>
      dispatch({
        type: GET_POSTS,
        payload: response.data,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

  dispatch(hideLoading());
};