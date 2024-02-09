import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
