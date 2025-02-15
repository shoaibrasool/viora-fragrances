import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cartTypes";

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    increaseCount: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      } else if (item && item.count === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, increaseCount, decreaseCount, removeItem, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
