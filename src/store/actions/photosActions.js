import { GET_PHOTOS } from "./types";
import { changeTab, clearErrors, hideLoading, returnErrors, showLoading } from "./controlActions";
import axios from "axios";


export const getPhotos = (page = 1) => (dispatch) => {
  dispatch(showLoading());

  axios
  .get(`/photos?page=${page}`)
    .then((response) =>
      dispatch({
        type: GET_PHOTOS,
        payload: response.data,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

  dispatch(hideLoading());
};