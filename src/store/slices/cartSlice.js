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
          price: newItem.product.price,
          totalPrice: newItem.amount * newItem.product.price,
        });
      } else {
        existingItem.quantity += newItem.amount;
        existingItem.totalPrice += newItem.amount * newItem.product.price;
      }
    },

    toggleCartItemQuantity(state, action) {
      const { id, value } = action.payload;

      state.cart.map((item) => {
        if (item.id === id) {
          if (value === "increase") {
            ++item.quantity;
            item.totalPrice += item.price;
          }

          if (value === "decrease") {
            let newQuantity = --item.quantity;
            if (newQuantity < 1) newQuantity = 1;
            item.quantity = newQuantity;

            let newTotalPrice = item.totalPrice - item.price;
            if (newTotalPrice === 0) newTotalPrice = item.price;
            item.totalPrice = newTotalPrice;
          }
        } else {
          return item;
        }
      });
    },

    removeCartItem(state, action) {
      const { id } = action.payload;
      const tempCart = state.cart.filter((item) => item.id !== id);
      state.cart = tempCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
