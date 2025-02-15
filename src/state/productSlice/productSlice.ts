import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/productTypes";
import { fetchProducts } from "../../services/productService";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [
    {
      id: "1",
      name: "Product 1",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "2",
      name: "Product 2",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "3",
      name: "Product 3",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "4",
      name: "Product 4",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "5",
      name: "Product 5",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "6",
      name: "Product 6",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "7",
      name: "Product 7",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "8",
      name: "Product 8",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "9",
      name: "Product 9",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "10",
      name: "Product 10",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "11",
      name: "Product 11",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
    {
      id: "12",
      name: "Product 12",
      oldPrice: "Rs.2,199.00",
      newPrice: "Rs.450.00",
      images: ["ProductImages/1.webp", "ProductImages/2.webp"],
    },
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const products = await fetchProducts();
  return products;
});

export default productSlice.reducer;
