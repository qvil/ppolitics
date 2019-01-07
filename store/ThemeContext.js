import React from "react";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";
const ThemeContext = React.createContext(THEME_DARK);

const { Provider, Consumer: ThemeConsumer } = ThemeContext;

class ThemeProvider extends React.Component {
  state = { theme: THEME_DARK };

  actions = {
    handleToggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === THEME_DARK ? THEME_LIGHT : THEME_DARK
      }));
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
    // return (
    //   <ThemeContext.Provider
    //     value={{
    //       theme: this.state.theme,
    //       onToggleTheme: this.handleToggleTheme
    //     }}
    //   >
    //     {this.props.children}
    //   </ThemeContext.Provider>
    // );
  }
}

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
