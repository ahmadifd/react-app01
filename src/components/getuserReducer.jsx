import { ACTION_TYPES } from "./getuserAction";

export const initialState = {
  loading: false,
  data: {},
  error: false,
};

// Fetch_start   : loading :true
// fetch_success : loading: false
//               : fact : res.data.fact
//
// fetch_error   : loading: false
//               : error  : true

export const GetUserReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.Fetch_start:
      return { loading: true, data: {}, error: false };
    case ACTION_TYPES.fetch_success: {
      console.log(action.data);
      return { loading: false, data: {}, error: false };
    }
    case ACTION_TYPES.fetch_error:
      return { loading: false, data: {}, error: true };
    default:
      return state;
  }
};
