import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
