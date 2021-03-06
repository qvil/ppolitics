import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const buttonBackgroundColor = theme("theme", {
  light: "#fcc2d7",
  dark: "#c2255c"
});

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background: ${buttonBackgroundColor};
  color: white;
  border-radius: 0.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  /* Box */
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.11);
  &:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
