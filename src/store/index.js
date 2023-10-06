import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth.js";
import ArticleReducer from "../slice/articles.js";

export default configureStore({
  reducer: {
    auth: authSlice,
    article: ArticleReducer,
  },
  devToolsL: true,
});
