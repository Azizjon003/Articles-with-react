import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
  articleDetail: null,
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
    getArticleStart: (state, action) => {
      state.isLoading = true;
    },
    getArticleSucces: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getArticlesArticlesSucces,
  getArticlesStart,
  getArticleError,
  getArticleSucces,
  getArticleStart,
} = ArticleSlice.actions;

export default ArticleSlice.reducer;
