import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
  name: "visited",
  initialState: {
    isVisited: false,
  },
  reducers: {
    toggleIsVisited: (state) => {
      state.isVisited = true;
    },
  },
});

export const { toggleIsVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
