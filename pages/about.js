import Button from "../components/Button";
import ThemeContext from "../store/ThemeContext";

class About extends React.Component {
  static contextType = ThemeContext;
  handleClick = () => {
    console.log("click");
  };
  render() {
    // console.log(contextType);
    return (
      <div>asdf</div>
      // <ThemeContext.Consumer>
      //   {({ theme, onToggleTheme }) => (
      //     <div>
      //       {theme}
      //       <Button onClick={onToggleTheme}>Button</Button>
      //     </div>
      //   )}
      // </ThemeContext.Consumer>
    );
  }
}

export default About;
