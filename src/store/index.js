import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

const reducers = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
