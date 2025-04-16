import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    query: "",
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload || "";
    },
  },
});

export const { setQuery } = filtersSlice.actions;

export default filtersSlice.reducer;