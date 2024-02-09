import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />

      <App />
    </BrowserRouter>
  </React.StrictMode>
);
