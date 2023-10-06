import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
};
export const ArticleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {
    getArticlesStart: (state, action) => {
      state.isLoading = true;
    },
    getArticlesArticlesSucces: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const { getArticlesArticlesSucces, getArticlesStart } =
  ArticleSlice.actions;

export default ArticleSlice.reducer;
