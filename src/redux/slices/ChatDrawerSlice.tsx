import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatDrawer {
  isChat: boolean;
}

const initialState: ChatDrawer = {
  isChat: false,
};

export const ChatDrawer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    isChat: (state, action: PayloadAction<boolean>) => {
      state.isChat = action.payload;
    },
  },
});

export const { isChat } = ChatDrawer.actions;

export const ChatReducer = ChatDrawer.reducer;
