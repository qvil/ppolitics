import Button from "../components/Button";
import ThemeContext, { ThemeConsumer } from "../store/ThemeContext";

class About extends React.Component {
  static contextType = ThemeContext;
  handleClick = () => {
    console.log("click");
  };
  render() {
    return (
      <ThemeConsumer>
        {value => {
          console.log(value);
          return <div>laksdjff</div>;
        }}
      </ThemeConsumer>
      // <ThemeContext.Consumer>
      //   {/* {({ theme, onToggleTheme }) => ( */}
      //   {props => {
      //     console.log(props);
      //     return (
      //       <div>
      //         {/* {theme} */}
      //         {/* <Button onClick={onToggleTheme}>Button</Button> */}
      //         asadf
      //       </div>
      //     );
      //   }}
      // </ThemeContext.Consumer>
    );
  }
}

export default About;
