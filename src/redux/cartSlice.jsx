import { createSlice } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig"; // Path to your firebase configuration file
import { getAuth } from "firebase/auth";
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

export const addItemToCart = (item) => async (dispatch) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(fireDB, "users", user.uid);
    console.log(user.uid, doc(fireDB, "users", user.uid));

    await updateDoc(userDocRef, {
      cart: arrayUnion({
        ...item,
        quantity: 1,
      }),
    });
  }
  dispatch(addToCart(item));
};

export default cartSlice.reducer;
