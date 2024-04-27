import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/ProductSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { cartReducer } from "./slices/CartSlice";
import { AuthReducer } from "./slices/AuthSlice";
import { loaderReducer } from "./slices/loaderSlice";
import { WishReducer } from "./slices/WishlistSlice";

// Define the reducers
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: AuthReducer,
  loader:loaderReducer,
  wish:WishReducer
  // Add other reducers as needed
});

const persistConfig = {
  key: "root",
  storage, // Use sessionStorage as the storage engine
  whitelist: ["product", "cart", "auth","wish"], // Specify which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Initialize Redux Persist
export const persistor = persistStore(store);
