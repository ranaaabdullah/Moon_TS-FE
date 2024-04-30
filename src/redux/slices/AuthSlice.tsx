import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.user = action.payload;
    },
    LogoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { LoginUser, LogoutUser } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
