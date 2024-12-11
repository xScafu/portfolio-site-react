import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
  name: "visited",
  initialState: {
    isVisited: false,
    isBoxesVisited: false,
    boxesAnimations: 0,
  },
  reducers: {
    toggleIsVisited: (state) => {
      state.isVisited = true;
    },
    toggleBoxesVisited: (state) => {
      state.isBoxesVisited = true;
    },
    addBoxesAnimation: (state) => {
      state.boxesAnimations += 1;
      console.log(state.boxesAnimations);
    },
  },
});

export const { toggleIsVisited, toggleBoxesVisited, addBoxesAnimation } =
  visitedSlice.actions;
export default visitedSlice.reducer;
