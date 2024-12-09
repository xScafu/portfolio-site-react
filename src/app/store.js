import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import mobileMenuReducer from "../features/mobileMenu/mobileMenuSlice";
import visitedReducer from "../features/visited/visitedSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    mobileMenu: mobileMenuReducer,
    visited: visitedReducer,
  },
});
