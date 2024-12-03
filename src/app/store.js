import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import mobileMenuReducer from "../features/mobileMenu/mobileMenuSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    mobileMenu: mobileMenuReducer,
  },
});
