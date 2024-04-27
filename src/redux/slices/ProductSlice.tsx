import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Product {
  _id: string;
  name: string;
  description: string;
  photos: string[];
  color: string[];
  price: number;
  category: string;
  countInStock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface ProductState {
  products: Product[];
}

const initialState:ProductState = {
  products: [],
};



export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action:PayloadAction<Product[]>) => {

      console.log(action)
      state.products = action.payload;

    },
    // filterProduct: (state, action) => {
    //   try {
    //     const filter = data.filter((product) => {
    //       return product.category.name === action.payload;
    //     });
    //     state.products = filter;
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
});

export const { addProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;
