import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

export default class MyApp extends App {
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
      <ThemeProvider theme={{ mode: "dark" }}>
        <Container>
          <Component {...pageProps} />
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    );
  }
}
