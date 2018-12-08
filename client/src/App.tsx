import * as React from "react";
import { Router } from "@reach/router";
import { HomePage } from "./pages/HomePage";
import { AppPage } from "./pages/AppPage";
import { LoginPage } from "./pages/LoginPage";
import { withStyledComponentsTheme } from "./hocs/withStyledComponentsTheme";
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <HomePage path="/" />
            <AppPage path="/app" />
            <LoginPage path="/login/:status/:jwt" />
          </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export interface Theme {
  titleFamilyFont: string;
  main: string;
}

export const theme: Theme = {
  titleFamilyFont: "'Varela Round', sans-serif",
  main: "#267df4"
};

export default withStyledComponentsTheme(theme)(App);
