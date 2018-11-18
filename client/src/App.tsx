import * as React from "react";
import { Router } from "@reach/router";
import { HomePage } from "./pages/HomePage";
import { withStyledComponentsTheme } from "./hocs/withStyledComponentsTheme";
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
    );
  }
}

export interface Theme {
  titleFamilyFont: string,
  main: string;
}

export const theme: Theme = {
  titleFamilyFont: "'Varela Round', sans-serif",
  main: "#267df4"
}

export default withStyledComponentsTheme(theme)(App);
