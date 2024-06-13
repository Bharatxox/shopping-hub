import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.push(payload);
    },
    deleteFromCart(state, { payload }) {
      return state.filter((item) => item.id != payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
