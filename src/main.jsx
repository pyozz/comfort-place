import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import GlobalStyle from "./styles/globalStyle.js";
import { Reset } from "styled-reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />

    <App />
  </React.StrictMode>
);
