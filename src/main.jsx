import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyle from "./styles/globalStyle.js";
import { ProductsProvider } from "./contexts/products_context.jsx";
import { store, persistor } from "./store/index.js";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />

      <ProductsProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
