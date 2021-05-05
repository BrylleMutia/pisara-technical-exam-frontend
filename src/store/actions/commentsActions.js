import { GET_COMMENTS } from "./types";
import { changeTab, clearErrors, hideLoading, returnErrors, showLoading } from "./controlActions";
import axios from "axios";

export const getComments = (page = 1) => (dispatch) => {
  dispatch(showLoading());

  axios
    .get(`/comments?page=${page}`)
    .then((response) =>
      dispatch({
        type: GET_COMMENTS,
        payload: response.data,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

  dispatch(hideLoading());
};
