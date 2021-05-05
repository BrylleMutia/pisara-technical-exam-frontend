import { GET_ALBUMS } from "../actions/types";

const initialState = {
  data: [],
  current_page: 1,
  first_page_url: "",
  from: 1,
  last_page: 1,
  last_page_url: "",
  next_page_url: null,
  path: "",
  per_page: 10,
  prev_page_url: null,
  to: 1,
  total: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
