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

    updateFilters(state, action) {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },

    filterProducts(state) {
      const { all_products } = state;
      const { text, category, company } = state.filters;

      let tempProducts = [...all_products];

      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.company === company;
        });
      }

      state.filtered_products = tempProducts;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
