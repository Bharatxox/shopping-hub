import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { products } from "../service/product";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [products.reducerPath]: products.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
  devTools: true,
});
