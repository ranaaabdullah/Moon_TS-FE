import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  price: number;
  quantity: number;
  img: string;
  totalPrice: number;
  name: string;
  color: string;
  countInStock: number | undefined;
  count?: number;
}

interface CartState {
  cart: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // @ts-ignore
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      try {
        const exist: any = state.cart.find(
          (item: any) => item.id === product.id
        );
        if (exist) {
          exist.quantity++;
          exist.totalPrice += product.totalPrice;
          state.totalPrice += product.totalPrice;
        } else {
          state.cart.push({
            id: product.id,
            price: product.price,
            quantity: product.quantity,
            img: product.img,
            totalPrice: product.totalPrice,
            name: product.name,
            color: product.color,
            countInStock: product.count,
          });
          state.totalPrice += product.totalPrice;
        }
      } catch (err) {
        return err;
      }
    },
    AddQuantityAndPrice(
      state,
      action: PayloadAction<{ price: number; id: number }>
    ) {
      const { price, id } = action.payload;
      const updatedData = state.cart.map((item: any) => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item?.quantity + 1,
            totalPrice: item?.totalPrice + price,
          };
        }
        return item;
      });
      state.cart = updatedData;
      state.totalPrice += price;
    },
    lessQuantityAndPrice(
      state,
      action: PayloadAction<{ price: number; qunatity: number; id: number }>
    ) {
      const { price, id } = action.payload;
      const updatedData = state.cart.map((item: any) => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item?.quantity - 1,
            totalPrice: item?.totalPrice - price,
          };
        }
        return item;
      });
      state.cart = updatedData;
      state.totalPrice -= price;
    },
    removeFromCart(state, action) {
      const { id, totalPrice } = action.payload;

      state.cart = state.cart.filter((product: any) => product.id !== id);
      state.totalPrice -= totalPrice;
    },
    emptyCart(state) {
      state.cart = [];
      state.totalPrice=0
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  AddQuantityAndPrice,
  lessQuantityAndPrice,
  emptyCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
