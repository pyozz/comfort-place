import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";

import GlobalStyle from "./styles/globalStyle.js";
import { ProductsProvider } from "./contexts/products_context.jsx";
import store from "./store/index.js";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />

      <ProductsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
