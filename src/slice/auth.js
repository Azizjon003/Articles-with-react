import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLogged: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUserStart: (state, action) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
    },
    signUserFailure: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signUserFailure, signUserStart, signUserSuccess } =
  authSlice.actions;

export default authSlice.reducer;
