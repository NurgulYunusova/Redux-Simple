import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) => {
      let filteredFavourites = state.filter((q) => q.id != action.payload);
      return [...filteredFavourites];
    },
    empty: () => {
      return [];
    },
  },
});

export const { addItem, removeItem } = favouritesSlice.actions;

export default favouritesSlice.reducer;
