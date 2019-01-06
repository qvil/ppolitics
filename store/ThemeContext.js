import React from "react";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";
const ThemeContext = React.createContext(THEME_DARK);

class ThemeProvider extends React.Component {
  state = { theme: THEME_DARK };

  handleToggleTheme = theme =>
    this.setState(({ theme }) => ({
      theme: theme === THEME_DARK ? THEME_LIGHT : THEME_DARK
    }));

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          onToggleTheme: this.handleToggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export default ThemeProvider; // Error?
export default ThemeContext;
