import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all_products: [],
  filtered_products: [],
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAllProductsFromContext(state, action) {
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);

      state.all_products = [...action.payload];
      state.filtered_products = [...action.payload];
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
