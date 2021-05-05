import { CHANGE_TAB, GET_ERRORS, CLEAR_ERRORS, LOADED, LOADING } from "../actions/types";

const initialState = {
  tab: "users",
  isLoading: false,
  error: {
    message: "",
    status: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case LOADED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_ERRORS:
      return {
        ...state,
        error: {
          message: action.payload.msg,
          status: action.payload.status,
        },
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: {
          message: "",
          status: null,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
