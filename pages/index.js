import { withRouter } from "next/router";
import styled from "styled-components";
import Button from "../components/Button";

const Title = styled.h1`
  color: red;
`;

const Index = props => {
  const handleClick = () => {
    props.router.push("/about");
  };
  return (
    <div>
      <Title>Hello</Title>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
};

export default withRouter(Index);
