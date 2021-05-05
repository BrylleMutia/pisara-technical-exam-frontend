import { GET_TODOS } from "./types";
import { changeTab, clearErrors, hideLoading, returnErrors, showLoading } from "./controlActions";
import axios from "axios";


export const getTodos = (page = 1) => (dispatch) => {
  dispatch(showLoading());

  axios
  .get(`/todos?page=${page}`)
    .then((response) =>
      dispatch({
        type: GET_TODOS,
        payload: response.data,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

  dispatch(hideLoading());
};