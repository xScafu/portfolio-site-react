import { createSlice } from "@reduxjs/toolkit";

let checkMobile = JSON.parse(localStorage.getItem("mobile")) || false;

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: { isOpen: false, isMobile: checkMobile },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isOpen = !state.isOpen;
      state.isMobile = true;
      localStorage.setItem("mobile", JSON.stringify(state.isMobile));
    },
    toggleIsMobile: (state) => {
      state.isMobile = false;
      localStorage.setItem("mobile", JSON.stringify(state.isMobile));
    },
  },
});

export const { toggleMobileMenu, toggleIsMobile } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
