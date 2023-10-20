import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    login: (state, action) => {
      // {username : "sarvin"}
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.username = "";
    },
  },
});
export const { login, logout } = userSlice.actions;

const userReduxSlice = createSlice({
  name: "userredux",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    fCALL_API (state, action)  {
      state.loading = true;
    },
    fSUCCESS(state, action)  {
      state.loading = false;
      state.data = action.payload.data;
    },
    fERROR (state, action)  {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});
export const { fCALL_API, fSUCCESS, fERROR } = userReduxSlice.actions;

export const getApi = createAsyncThunk("getApi", async () => {
  return await axios.get(`https://reqres.in/api/users/50`).then((res) => {
    return res.data.data;
  });
});
const userReduxSlice2 = createSlice({
  name: "userredux2",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [getApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      console.log("fulfilled", action.payload);
    },

    [getApi.pending]: (state) => {
      state.loading = true;
      console.log("pending");
    },

    [getApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("rejected", action.error);
    },
  },
});
export const { getApi: getUserApi } = userReduxSlice2.actions;


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userredux2: userReduxSlice2.reducer,
    userredux: userReduxSlice.reducer,
  },
});
