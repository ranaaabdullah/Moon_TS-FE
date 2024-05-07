

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  img?:any
}

interface WishlistState {
  wishList: Product[];
  isOpen: boolean;
}

const initialState: WishlistState = {
  wishList: [],
  isOpen: false,
};

export const WishList = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddWish: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      console.log(product)
      const exist = state.wishList.find((item) => item.id === product.id);
      if (!exist) {
        state.wishList.push(product);
      } else {
        state.wishList = state.wishList.filter((item) => item.id !== exist.id);
      }
    },
    Dislike: (state, action: PayloadAction<string>) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    IsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { AddWish, IsOpen, Dislike } = WishList.actions;

export const WishReducer = WishList.reducer;

