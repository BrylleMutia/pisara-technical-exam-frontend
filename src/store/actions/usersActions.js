import { GET_ALBUMS, GET_COMMENTS, GET_PHOTOS, GET_POSTS, GET_TODOS, GET_USERS } from "./types";
import { changeTab, clearErrors, hideLoading, returnErrors, showLoading } from "./controlActions";
import axios from "axios";

export const getUsers = (page = 1) => (dispatch) => {
  dispatch(showLoading());

  axios
  .get(`/users?page=${page}`)
    .then((response) =>
      dispatch({
        type: GET_USERS,
        payload: response.data,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

  dispatch(hideLoading());
};
