import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
  shipping_fee: 3000,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === newItem.product.id + newItem.mainColor
      );
      state.totalQuantity += newItem.amount;
      state.totalAmount += newItem.amount * newItem.product.price;

      if (!existingItem) {
        state.cart.push({
          id: newItem.product.id + newItem.mainColor,
          name: newItem.product.name,
          color: newItem.mainColor,
          image: newItem.product.images[0].url,
          quantity: newItem.amount,
          totalPrice: newItem.amount * newItem.product.price,
        });
      } else {
        existingItem.quantity += newItem.amount;
        existingItem.totalPrice += newItem.amount * newItem.product.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
