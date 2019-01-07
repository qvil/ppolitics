import { withRouter } from "next/router";
import styled from "styled-components";
import Button from "../components/Button";
import { ThemeConsumer } from "../store/ThemeContext";

const Title = styled.h1`
  color: red;
`;

const Index = props => {
  const handleClick = () => {
    props.router.push("/about");
  };
  return (
    <ThemeConsumer>
      {value => {
        const { handleToggleTheme } = value.actions;

        return (
          <div>
            <Title>Hello</Title>
            <Button onClick={handleClick}>Button</Button>
            <Button onClick={handleToggleTheme}>Change Theme</Button>
          </div>
        );
      }}
    </ThemeConsumer>
  );
};

export default withRouter(Index);
