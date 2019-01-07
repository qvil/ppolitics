import { createGlobalStyle } from "styled-components";
import theme from "styled-theming";

const bodyBackgroundColor = theme("theme", {
  light: "#ffec99",
  dark: "#e67700"
});

const GlobalStyle = createGlobalStyle`
  input, button {
    outline: none;
    border: none;
  }
  body {
    background: ${bodyBackgroundColor};
  }
`;

export default GlobalStyle;
