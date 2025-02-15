import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../productSlice/productSlice";
import cartReducer from "../cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
