import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth.js";
export default configureStore({
  reducer: {
    auth: authSlice,
  },
  devToolsL: true,
});
