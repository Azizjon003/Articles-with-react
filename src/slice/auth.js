import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLogged: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUserStart: (state, action) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {},
    loginUserFailure: (state, action) => {},

    RegisterUserStart: (state, action) => {
      state.isLoading = true;
    },
    RegisterUserSuccess: (state, action) => {},
    RegisterUserFailure: (state, action) => {},
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure } =
  authSlice.actions;

export default authSlice.reducer;
