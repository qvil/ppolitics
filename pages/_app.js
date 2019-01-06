import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import ThemeContext from "../store/ThemeContext";

export default class MyApp extends App {
  static contextType = ThemeContext;
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeContext.Provider>
        <ThemeProvider theme={{ mode: this.context }}>
          <Container>
            <Component {...pageProps} />
            <GlobalStyle />
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
