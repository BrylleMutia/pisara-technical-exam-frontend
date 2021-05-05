import { CHANGE_TAB, LOADING, LOADED, GET_ERRORS, CLEAR_ERRORS } from "./types";
import axios from "axios";


export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: tab,
});

export const showLoading = () => ({
  type: LOADING,
});

export const hideLoading = () => ({
  type: LOADED,
});

export const returnErrors = (msg, status) => ({
  type: GET_ERRORS,
    payload: {
        msg,
        status,
    },
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})


