import { createGlobalStyle } from "styled-components";
import NotoSansRegular from "@/assets/fonts/NotoSansKR-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansRegular';
    src: url(${NotoSansRegular}) format('truetype');
  }

  * {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'NotoSansRegular';
    color: #121212;
  }

  html {
    color: #121212;
    font-family: 'NotoSansRegular';
  }

  body {
    color: #121212;
    font-family: 'NotoSansRegular';
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    border: none;
    background-color: transparent;
    
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding-left: 0;
  }
`;

export default GlobalStyle;
