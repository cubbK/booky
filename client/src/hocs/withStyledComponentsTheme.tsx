import * as React from "react";
import { ThemeProvider } from "styled-components";

export interface Theme {
  primary: string;
}

const defaultTheme = {};

export const withStyledComponentsTheme = (theme = defaultTheme) => <
  P extends object
>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent />
        </ThemeProvider>
      );
    }
  };
};
