import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=").then(
      (res) => res.json()
    );
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleCocktail",
  async ({ id }) => {
    return fetch(
      `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

export const fetchSearchCocktails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ searchText }) => {
    return fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loadeing = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchSingleCocktail.pending]: (state, action) => {
      state.loadeing = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchSearchCocktails.pending]: (state, action) => {
      state.loadeing = true;
    },
    [fetchSearchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const formReduxSlice = createSlice({
  name: "formReduxSlice",
  initialState: {
    title: "",
    description: "",
    price: 0,
    category: "",
    tags: [],
    quantity: 0,
    errors: [],
  },
  reducers: {
    change_input(state, action) {
      state[action.payload.data.name] = action.payload.data.value;
    },
    add_tag(state, action) {
      state.tags = [...state.tags, action.payload.data];
    },
    remove_tag(state, action) {
      state.tags = state.tags.filter((tag) => tag !== action.payload.data);
    },
    increase(state, action) {
      state.quantity = state.quantity + 1;
    },
    decrease(state, action) {
      state.quantity = state.quantity - 1;
    },
    error(state, action) {
      state.errors = action.payload.data;
    },
    success(state, action) {
      state.errors = [];
    },
  },
});

export const {
  change_input,
  add_tag,
  remove_tag,
  increase,
  decrease,
  error,
  success,
} = formReduxSlice.actions;

export const store = configureStore({
  reducer: {
    app: cocktailSlice.reducer,
    formReduxSlice: formReduxSlice.reducer,
  },
});
