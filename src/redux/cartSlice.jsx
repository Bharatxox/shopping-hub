import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.findIndex((item) => item.asin === payload.asin);
      if (itemIndex < 0) {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, { payload }) {
      return state.filter((item) => item.asin !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      const itemIndex = state.findIndex((item) => item.asin === payload);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const itemIndex = state.findIndex((item) => item.asin === payload);
      if (itemIndex >= 0 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
