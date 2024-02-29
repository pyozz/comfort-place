import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload;
      state.wishlist.push(newItem);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice.reducer;
